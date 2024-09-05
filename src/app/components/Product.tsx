import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  currency: string;
  rating: number;
  reviews: number;
  colors: { name: string; hex: string }[];
  storage: string[];
  leaseDurations: number[];
  defaultLeaseDuration: number;
  images: { [key: string]: string[] };
  features: string[];
  additionalInfo: {
    care: string;
    paymentNote: string;
  };
}

// ColorSelector Component
const ColorSelector: React.FC<{
  colors: { name: string; hex: string }[];
  selectedColor: string;
  onColorChange: (color: string) => void;
}> = ({ colors, selectedColor, onColorChange }) => (
  <div className="mt-4">
    <h3 className="text-sm font-medium text-gray-900">Color</h3>
    <div className="flex space-x-3 mt-2">
      {colors.map((color) => (
        <button
          key={color.name}
          className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            selectedColor === color.name ? 'ring-2 ring-indigo-500' : ''
          }`}
          style={{ backgroundColor: color.hex }}
          onClick={() => onColorChange(color.name)}
          aria-label={color.name}
        />
      ))}
    </div>
  </div>
);

// StorageSelector Component
const StorageSelector: React.FC<{
  options: string[];
  selectedStorage: string;
  onStorageChange: (storage: string) => void;
}> = ({ options, selectedStorage, onStorageChange }) => (
  <div className="mt-4">
    <h3 className="text-sm font-medium text-gray-900">Storage</h3>
    <div className="grid grid-cols-3 gap-2 mt-2">
      {options.map((option) => (
        <button
          key={option}
          className={`px-3 py-2 text-sm font-medium rounded-md ${
            selectedStorage === option
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-900'
          }`}
          onClick={() => onStorageChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

// LeaseSelector Component
const LeaseSelector: React.FC<{
  durations: number[];
  selectedDuration: number;
  onDurationChange: (duration: number) => void;
}> = ({ durations, selectedDuration, onDurationChange }) => (
  <div className="mt-4">
    <h3 className="text-sm font-medium text-gray-900">Lease Duration</h3>
    <div className="grid grid-cols-3 gap-2 mt-2">
      {durations.map((duration) => (
        <button
          key={duration}
          className={`px-3 py-2 text-sm font-medium rounded-md ${
            selectedDuration === duration
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-900'
          }`}
          onClick={() => onDurationChange(duration)}
        >
          {duration} {duration === 1 ? 'month' : 'months'}
        </button>
      ))}
    </div>
  </div>
);

// ProductImage Component
const ProductImage: React.FC<{
  images: string[];
  color: string;
}> = ({ images, color }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    console.log('com')
    setIsLoading(false);
  };
  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 1500);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div className="relative w-full">
      <div className="w-full overflow-hidden rounded-3xl bg-white">
        {isLoading && (
          <div className="w-full h-96 bg-gray-200 animate-pulse" />
        )}
        <motion.div
          key={images[currentImageIndex]}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className=''
        >
          <Image
            src={images[currentImageIndex]}
            alt={`${color} product image`}
            width={500}
            height={500}
            onLoad={handleImageLoad}
            className={`h-full w-full object-cover object-center ${
              isLoading ? 'hidden' : 'block'
            }`}
            priority
          />
        </motion.div>
      </div>
      <div className="mt-4 flex justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            className={`mx-2 h-3 w-3 rounded-full ${
              currentImageIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Main ProductPage Component
const ProductPage: React.FC<{ product: Product }> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedStorage, setSelectedStorage] = useState(product.storage[0]);
  const [leaseDuration, setLeaseDuration] = useState(product.defaultLeaseDuration);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm mb-4">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <a href="#" className="text-gray-400">Tous les produits</a>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
          </li>
          <li className="flex items-center">
            <a href="#" className="text-gray-400">Smartphones</a>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
          </li>
          <li>
            <a href="#" className="text-gray-700" aria-current="page">{product.name}</a>
          </li>
        </ol>
      </nav>
      
      <motion.div 
        className="flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/2">
          <ProductImage 
            images={product.images[selectedColor]} 
            color={selectedColor} 
          />
        </div>
        
        <div className="md:w-1/2">
          {isLoading && (
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-gray-200 animate-pulse rounded" />
              <div className="h-6 w-1/2 bg-gray-200 animate-pulse rounded" />
              <div className="h-10 w-full bg-gray-200 animate-pulse rounded" />
              <div className="h-32 w-full bg-gray-200 animate-pulse rounded" />
            </div>
          )}

          {!isLoading && (
            <>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <p className="text-gray-600">{product.subtitle}</p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 fill-current ${
                      i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">{product.rating} / 5</span>
                <span className="ml-2 text-gray-500">({product.reviews} reviews)</span>
              </div>
              
              <p className="text-3xl font-bold mt-4">{product.price} {product.currency} / month</p>
              <p className="text-sm text-gray-500">{product.additionalInfo.paymentNote}</p>
              
              <ColorSelector 
                colors={product.colors} 
                selectedColor={selectedColor} 
                onColorChange={setSelectedColor} 
              />
              
              <StorageSelector 
                options={product.storage} 
                selectedStorage={selectedStorage} 
                onStorageChange={setSelectedStorage} 
              />

              {/* <LeaseDurationSelector 
                duration={leaseDuration} 
                onDurationChange={setLeaseDuration} 
                product={product}
              /> */}

              <button className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4">
                Ajouter au panier
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductPage;