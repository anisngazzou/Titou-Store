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

const ColorPicker2 = ({ productColors }: any) => {
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
    <div className=" flex flex-wrap gap-4 my-2 bg-white pl-4 py-4 pr-2 rounded-[20px] shadow-md">
      {/* Display initial color buttons */}
      {productColors.map((color: any) => (
        <motion.button
          key={color.code}
          className="w-6 h-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ backgroundColor: color.code }}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          // onClick={() => setSe6ectedColor(color)}
        />
      ))}

    

    </div>
  );
};

export default ColorPicker2;
