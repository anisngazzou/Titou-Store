import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { OverlayCopy } from '@/app/components/PxContent';

const VideoScroll: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });

  const scale :any= useTransform(scrollYProgress, [0, 1], [1, 0.85]);
 
  const opacity:any = useTransform(scrollYProgress, [0, 1], [1,0]) ;
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [70, 100]);
 
  useEffect(() => {
    
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const sectionHeight = section.clientHeight;
    const viewportHeight = window.innerHeight;
    const totalScrollableDistance = sectionHeight - viewportHeight;

    const handleScroll = () => {
      const distanceScrolled = window.scrollY - section.offsetTop;
      const percentage = Math.min(Math.max(distanceScrolled / totalScrollableDistance, 0), 1);

      if (video.duration > 0) {
        video.currentTime = video.duration * percentage;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

  return (
    <motion.section
      ref={sectionRef}
      className="h-[300vh] relative mt-24 m-4 rounded-3xl zoom"
      style={{ scale }}
    >
      <motion.div
        className="sticky top-0"
        style={{ opacity }}
      >
        <video
          ref={videoRef}
          src="/videos/BagTrim.mp4"
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-3xl"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          opacity,
          backgroundColor: `rgba(0, 0, 0, 0.6)`,
          
        }}
     
      />
      <OverlayCopy subheading='hello'
heading='hello' />
      {/* <div className="absolute top-0 left-0 w-full text-secondary">
        <div className="h-screen flex items-center justify-center text-center">
          <h1 className='text-[8rem] font-bold text-white'>Titou Luggage</h1>
        </div>
      </div> */}
    </motion.section>
  );
};

export default VideoScroll;
