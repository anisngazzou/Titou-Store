import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface GalaxyAdProps {
  backgroundUrl: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const CardAd: React.FC<GalaxyAdProps> = ({
  backgroundUrl,
  title,
  description,
  ctaText,
  ctaLink,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    
    <div 
      className="mt-8 mb-8  relative w-full h-[300px] overflow-hidden shadow-lg bg-cover bg-center flex rounded-[36px]  "
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      
      <div className="relative w-1/2 h-full flex flex-col justify-center items-start p-8">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-4xl font-bold text-black mb-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-xl text-black mb-6"
        >
          {description}
        </motion.p>
        {/* <motion.a
          href={ctaLink}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
        >
          {ctaText}
        </motion.a> */}
      </div>
    </div>
  

  );
};

export default CardAd;