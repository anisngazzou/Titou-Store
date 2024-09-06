import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = [
  { name: 'Teal', hex: '#4FD1C5' },
  { name: 'Sky Blue', hex: '#38B2AC' },
  { name: 'Black', hex: '#1A202C' },
  { name: 'Yellow', hex: '#ECC94B' },
  { name: 'Maroon', hex: '#9B2C2C' },
  { name: 'Navy', hex: '#2C5282' },
  { name: 'Gray', hex: '#718096' },
  { name: 'Mauve', hex: '#B794F4' },
  { name: 'Burgundy', hex: '#702459' },
  { name: 'Light Gray', hex: '#CBD5E0' },
];

const ColorPicker = ({ selectedColor, setSelectedColor, productColors }: any) => {
  const [showAllColors, setShowAllColors] = useState(false);
  const dotsContainerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const dotVariants = {
    initial: { y: 0 },
    hover: {
      y: [0, -5, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const colorVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  const buttonVariantsClose = {
    hover: {
      scale: 1.1,
    },
    tap: {
      scale: 0.95,
    },
  };

  const dotVariantsClose = {
    initial: { opacity: 1 },
    hover: { opacity: 0 },
  };
  return (
    <div className=" flex flex-wrap gap-4 my-2">
      {/* Display initial color buttons */}
      {productColors.slice(0, 4).map((color: any) => (
        <motion.button
          key={color.code}
          className="w-4 h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ backgroundColor: color.code }}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setSelectedColor(color)}
        />
      ))}

    
{
  productColors.length >3 && <div className='relative'>
  {!showAllColors ? (
            <motion.button
              className="w-4 h-4  rounded-full bg-white flex items-center justify-center "
              onClick={() => setShowAllColors(true)}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div 
                className="flex flex-row flex-row-reverse gap-1 rounded-full border items-center justify-center w-5 h-5 p-0.5 "
                variants={dotsContainerVariants}
              >
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-[0.13rem] h-[0.13rem] bg-black rounded-full"
                    variants={dotVariants}
                  />
                ))}
              </motion.div>
            </motion.button>
          ):(
            <motion.button
              className="w-4 h-4  rounded-full bg-white flex items-center justify-center "
              onClick={() => setShowAllColors(false)}
              variants={buttonVariantsClose}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div 
                className="flex flex-row flex-row-reverse gap-1 rounded-full border items-center justify-center w-5 h-5 p-0.5  "
                variants={dotsContainerVariants}
              >
  
                {[0, 1, ].map((index) => (
                  <motion.div
                    key={index}
                    className="w-[0.13rem] h-[0.13rem] bg-black rounded-full"
                    variants={dotVariantsClose}
                  />
                ))}
                <div
                    
                    className="w-[0.13rem] h-[0.13rem] bg-black rounded-full"
                    
                  />
              </motion.div>
            </motion.button>
          )}
  
        {/* Absolute positioned dropdown for additional colors */}
        <AnimatePresence>
          {showAllColors && (
            <motion.div
              className="absolute -right-1 top-4 flex flex-col gap-2 bg-white p-2 rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
            >
              {productColors.slice(4).map((color: any) => (
                <motion.button
                  key={color.code}
                  className="w-4 h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ backgroundColor: color.code }}
                  variants={colorVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
  
  </div>
}
    </div>
  );
};

export default ColorPicker;
