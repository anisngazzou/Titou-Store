import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import ColorPicker from '@/app/components/ColorSelector';
import { FaArrowRight } from 'react-icons/fa6';
type Product = {
  name: string;
  description: string;
  price: number;
  colors: string[];
  images: string[];
};

type ProductCardProps = {
  product: any;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log("🚀 ~ product:", product)
  const [selectedColor, setSelectedColor] = useState<any>(product.colors[0]);
  console.log("🚀 ~ selectedColor:", selectedColor)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const arrayOfImgs = []
  console.log("🚀 ~ currentImageIndex:", currentImageIndex)

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedColor.images.length);
  };

  return (
 
    <motion.div
      className="max-w-xs p-4 bg-white rounded-[32px] relative shadow-md hover:shadow-custom"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ImageSlider
        images={selectedColor.images}
        currentImageIndex={currentImageIndex}
        handleNextImage={handleNextImage}
      />
        <ColorPicker productColors={product.colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      <div className="mt-4 w-full">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-sm text-gray-600">lorem ipsuem doloren foo ba lorem doloran ipsum.</p>
       <div className='flex justify-between items-center '>
       <p className="text-lg font-semibold mt-2">${199.99}</p>
      
       </div>
      
      </div>
      <Link href={`/products/${product.id}`}>
      <div className='absolute flex items-center justify-center bg-[#FFD500] rounded-l-[24px] rounded-b-[32px] bottom-0 right-0 min-w-[75px] border h-[60px]  '>
      <div className=" rounded-full  p-2 hover:bg-white  cursor-pointer   ">
                <FaArrowRight size={24} className='' />
              </div>
      </div>
      </Link>
   
    </motion.div>
 
  );
};

type ImageSliderProps = {
  images: string[];
  currentImageIndex: number;
  handleNextImage: () => void;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  currentImageIndex,
  handleNextImage,
}) => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-t-[24px] ">
      <img
        src={images[currentImageIndex]}
        alt="Product"
        className="w-full h-full object-cover"
        onClick={handleNextImage}
      />
      {images.length > 1 && (
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full cursor-pointer">
          Tap to slide
        </div>
      )}
    </div>
  );
};




export default ProductCard;
