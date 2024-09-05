import Image from 'next/image';
import React, { useState } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";
type Card = {
  id: number;
  image: string;
  price: string;
  description: string;
  details: string;
};

const cards: Card[] = [
  {
    id: 1,
    image: '/images/1.png',
    price: '27.90',
    description: 'Ensemble de 3 valise Shine',
    details: 'Roues démontables Color Brillant',
  },
  {
    id: 2,
    image: '/images/7.png',
    price: '54.90',
    description: 'Ensemble de 3 valise Mat',
    details: 'Roues démontables  Color Mat Pro',
  },
  {
    id: 3,
    image: '/images/1.png',
    price: '24.90',
    description: 'Ensemble de 3 valise Multicolor',
    details: 'Roues démontables Multi Color Pro',
  },
  {
    id: 4,
    image: '/images/7.png',
    price: '129.90',
    description: 'Ensemble de 2 valise',
    details: '28 - 70 mm',
  },


];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" w-full overflow-hidden bg-[#F0E7D5] rounded-inverseCustom ">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-x-10 pb-10  pt-10 px-6 ">
          {cards.map((card) => (
            <div key={card.id} className="w-1/4">
              <div className="bg-white rounded-custom-card shadow-lg p-4 text-left">
                <Image
                  src={card.image}
                  alt={card.description}
                  width={200}
                  height={200}
                  className="mx-auto mt-2 mb-6"
                />
                <div className="text-2xl font-bold -mb-1">{card.price} $</div>
                <div className="text-xs text-gray-500 mb-2">monthly for 12 month(s)</div>
                <div className="text-sm text-gray-500 ">{card.description}</div>
                {/* <div className="text-sm text-gray-500">{card.details}</div> */}
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className=' absolute  -bottom-4 right-4 flex gap-x-4 text-white justify-end py-4 px-4 w-full'>
        <div className=" rounded-full bg-[#d3cdbd8e] p-2 hover:bg-[#b2ac9cad]  ">
          <GrPrevious size={24} />
        </div>
        <div className=" rounded-full bg-[#d3cdbd8e] p-2 hover:bg-[#b2ac9cad]  ">
          <GrNext size={24} />
        </div>

      </div>
    </div>
  );
};

export default Carousel;
