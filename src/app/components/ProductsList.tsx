

import { motion } from 'framer-motion';
import { ChevronDown, Filter } from 'lucide-react';
import React, { useEffect,useState } from 'react';

import ProductCard from '@/app/components/PrxTry';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  isOutOfStock?: boolean;
}

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface FilterSection {
  title: string;
  options: FilterOption[];
}



const FilterSection: React.FC<{ section: FilterSection }> = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="flex justify-between items-center w-full text-left font-semibold mb-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {section.title}
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
          <ChevronDown size={16} />
        </motion.div>
      </button>
      <motion.ul
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {section.options.map((option) => (
          <motion.li 
            key={option.id} 
            className="flex items-center mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <input type="checkbox" id={option.id} className="mr-2" />
            <label htmlFor={option.id} className="flex-grow text-sm">
              {option.label}
            </label>
            <span className="text-sm text-gray-500">({option.count})</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const SkeletonCard: React.FC = () => (
  <motion.div 
    className="bg-white rounded-lg shadow-md overflow-hidden"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="h-48 bg-gray-300 animate-pulse" />
    <div className="p-4">
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2 animate-pulse" />
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2 animate-pulse" />
      <div className="h-6 bg-gray-300 rounded w-1/4 mt-2 animate-pulse" />
    </div>
  </motion.div>
);

const ProductListing: React.FC<{ products: any[], filters: FilterSection[] }> = ({ products, filters }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="container mx-auto px-4 py-8 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-2xl font-bold mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Liste des produits
      </motion.h1>
      <div className="flex flex-col lg:flex-row">
        <motion.aside 
          className="w-full lg:w-1/4 mb-8 lg:mb-0 lg:mr-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Durée de location</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {['1 mois', '3 mois', '6 mois', '12 mois', '24 mois'].map((duration, index) => (
                <motion.button
                  key={duration}
                  className={`px-3 py-1 rounded-full text-sm ${
                    duration === '12 mois' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {duration}
                </motion.button>
              ))}
            </div>
            {filters.map((section, index) => (
              <FilterSection key={index} section={section} />
            ))}
          </div>
        </motion.aside>
        <main className="w-full lg:w-3/4">
          <motion.div 
            className="flex justify-between items-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-sm text-gray-600">{products.length} produits</p>
            <div className="flex items-center">
              <Filter size={16} className="mr-2" />
              <select className="border rounded p-2 text-sm">
                <option>Trier par</option>
              </select>
            </div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
              : products.map((product,i) => <ProductCard key={i} product={product} />)
            }
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
};

export default ProductListing;