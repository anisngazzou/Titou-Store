
import { useState } from "react";
import { motion } from "framer-motion";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="mt-4">
    <h3 className="text-sm font-medium text-gray-900">Count</h3>
    <div className="flex space-x-3 mt-2">
    <motion.div  initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }} 
      className="relative flex justify-between items-center p-2 bg-yellow-400 border-2 border-black rounded-[24px] w-1/6">
        <motion.div className="w-2/5 text-center">
          <button
            onClick={() => {
              if(count >= 2 ) setCount(count - 1) 
            }}
            className=" text-black focus:outline-none text-xl font-bold"
          >
            -
          </button>
        </motion.div>
        <motion.div className="w-1/5 text-center">
          <h1 className="text-xl select-none font-bold">{count}</h1>
        </motion.div>
        <motion.div className="w-2/5 text-center">
          <button
            onClick={() => {
              if(count <= 9 ) setCount(count + 1) 
            }}
            className=" text-black focus:outline-none text-xl font-bold"
          >
            +
          </button>
        </motion.div>
      </motion.div>
</div>
</div>
     

  );
};

export default Counter;
