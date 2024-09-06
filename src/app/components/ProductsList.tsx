

import { motion } from 'framer-motion';
import { ChevronDown, Filter } from 'lucide-react';
import React, { useEffect,useState } from 'react';

import ProductCard from '@/app/components/PrxTry';
import CardAd from '@/app/components/AdsCard';
import ColorPicker from '@/app/components/ColorSelector';
import ColorPicker2 from '@/app/components/ExpandedColorSelector';

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



const FilterSection: React.FC<{ section: FilterSection, availbleColors:any[]}> = ({ section,availbleColors }) => {
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
        <ColorPicker2   productColors={ availbleColors}/>
      </motion.ul>

    </motion.div>
  );
};

const SkeletonCard: React.FC = () => (
  <motion.div
  className="max-w-xs p-4 bg-white rounded-lg shadow-md"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  {/* Image Skeleton */}
  <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
  <div className="mt-4 flex space-x-2">
    <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
    <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
    <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
    <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
  </div>
  {/* Product Name Skeleton */}
  <div className="mt-4 space-y-2">
    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
    <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
  </div>

  {/* Price Skeleton */}
  <div className="mt-4">
    <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
  </div>

  {/* Color Picker Skeleton */}
  
</motion.div>
);
function hexToRgb(hex:string) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}
function getUniqueColorCodes(categories:any[]) {
  const colorCodes = new Set();

  categories.forEach(category => {
    category.colors.forEach((colorObj:any) => {
      colorCodes.add({code:colorObj.code});
    });
  });

  return Array.from(colorCodes);
}
function getOrderedColorsByRgb(categories:any[]) {
  const colorCodes = new Set();

  // Extract unique color codes
  categories.forEach(category => {
    category.colors.forEach((colorObj:any) => {
      colorCodes.add({code:colorObj.code});
    });
  });

  // Convert hex colors to RGB and sort by red, green, blue values
  return Array.from(colorCodes).sort((a:any, b:any) => {
    const rgbA = hexToRgb(a.code);
    const rgbB = hexToRgb(b.code);

    // Sort by red first, then green, then blue
    return rgbA.r - rgbB.r || rgbA.g - rgbB.g || rgbA.b - rgbB.b;
  });
}

const ProductListing: React.FC<{ products: any[], filters: FilterSection[] }> = ({ products, filters }) => {
  const [isLoading, setIsLoading] = useState(true);
const availbleColors = getOrderedColorsByRgb(products)
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
       
      </motion.h1>
      <div className="flex flex-col lg:flex-row ">
        <motion.aside 
          className="w-full lg:w-1/4 mb-8 lg:mb-0 lg:mr-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className=" p-4 rounded-lg ">
            <h2 className="font-semibold mb-4">Filtres</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Shine', 'Shine +', 'Multi-Color', ].map((duration, index) => (
                <motion.button
                  key={duration}
                  className={`px-3 py-1 rounded-full text-sm ${
                    duration === 'Shine' ? 'bg-black text-white font-semibold' : 'bg-white text-black font-semibold'
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
              <FilterSection key={index} section={section} availbleColors={availbleColors} />
            ))}
          </div>
        </motion.aside>
        
        <main className="w-full lg:w-3/4">
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
              : products.map((product,i) => <ProductCard key={i} product={product} />)
            }
             
          </motion.div>
          <CardAd
      backgroundUrl="https://titou.ma/wp-content/uploads/2024/01/ee.png?id=9668"
      title="Nouvelle Collection Luxe"
      description="Explorez des pièces exclusives pour un style raffiné."
      ctaText="Découvrir maintenant"
      ctaLink="#"
    />
        </main>
      </div>
    </motion.div>
  );
};

export default ProductListing;