'use client';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import '@/lib/env';
import '../lib/i18n';

import CardComponent from '@/app/components/CardComponent';
import Carousel from '@/app/components/Carousel';
import Navbar from '@/app/components/Navbar';
import ProductOnePage from '@/app/components/Product';
import ProductPage from '@/app/components/ProductsPage';
import ScrollEffectWrapper from '@/app/components/ScrollEffectWrapper';
import VideoScroll from '@/app/components/VideoScroll';

import Logo from '~/svg/Logo.svg';
import ProductCard from '@/app/components/PrxTry';



export default function HomePage() {
  const exampleData:any[]= [
    {
        name: "Set of 3 Suitcases",
           description: 'Comfortable and stylish suite case for everyday use.',
           price:199,
           rating: 4.64,
           reviews: 6,
        category: "Brillant",
        availableColors: [
            "Blanc Cassé",
            "Bleu Ciel",
            "Bleu Marine",
            "Bleu Turquoise",
            "Gris",
            "Jaune",
            "Rouge",
            "Rouge Bordeaux",
            "Saumon",
            "Vert d'eau"
        ]
    },
    {
        name: "Set of 3 Suitcases",
           description: 'Comfortable and stylish suite case for everyday use.',
           price:199,
           rating: 4.64,
           reviews: 6,
        category: "Mat",
        availableColors: [
            "Bleu Turquoise",
            "Vert d'eau"
        ]
    },
    {
        name: "Set of 3 Suitcases",
           description: 'Comfortable and stylish suite case for everyday use.',
           price:199,
           rating: 4.64,
           reviews: 6,
        category: "Multicolore",
        availableColors: [
            "Beige Accessoires Bleu Marine",
            "Beige Accessoires Bleu Turquoise",
            "Beige Accessoires Jaune",
            "Beige Accessoires Rouge",
            "Beige Accessoires Rouge Bordeaux",
            "Beige Accessoires Saumon",
            "Face Blanc Face Gris",
            "Rouge Bordeaux Accessoires Beige",
            "Rouge Bordeaux Accessoires Gris",
            "Saumon Accessoires Beige"
        ]
    }
];
  const productExample = {
    id: "iphone-15-pro-512gb",
    name: "iPhone 15 Pro",
    subtitle: "512 GB - Black Titanium",
    price: 77.90,
    currency: "CHF",
    rating: 4.64,
    sizes: [],
    reviews: 6,
    colors: [
      { name: "Black Titanium", hex: "#4E4E4E" },
      { name: "White Titanium", hex: "#F5F5F0" },
      { name: "Blue Titanium", hex: "#394E6E" },
      { name: "Natural Titanium", hex: "#E3D0BB" }
    ],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    leaseDurations: [1, 3, 6, 12, 24],
    defaultLeaseDuration: 12,
    images: {
      "Black Titanium": [
        "/images/Brillant/Jaune/yellow.png",
        "/images/Brillant/Jaune/Sans-titre-2.png",
        "/images/Brillant/Jaune/Sans-titre-2.png",

      ],
      "White Titanium": [
        "/images/Brillant/Blanc Cassé/mmpllml.png",
        "/images/Brillant/Blanc Cassé/v17.png",
        "/images/Brillant/Blanc Cassé/Sans-titre-1sgqsdg.png",
        "/images/Brillant/Blanc Cassé/v17_d2.png",

      ],
      "Blue Titanium": [
        "/images/Brillant/Jaune/yellow.png",
        "/images/Brillant/Jaune/Sans-titre-2.png",
        "/images/Brillant/Jaune/Sans-titre-2.png",

      ],
      // ... similar arrays for other colors
    },
    features: [
      "A17 Pro chip",
      "Pro camera system",
      "Action button",
      "Always-On display"
    ],
    additionalInfo: {
      care: "Yuno Care, livraison et support inclus.",
      paymentNote: "Tu ne paies que CHF 934.80 pour 12 mois."
    },

  };

  const product = {
    name: 'Awesome Sneakers',
    description: 'Comfortable and stylish sneakers for everyday use.',
    price: 89.99,
    colors: ['#FF5733', '#33FF57', '#3357FF'],
    images: [
      "/images/Brillant/Blanc Cassé/mmpllml.png",
      "/images/Brillant/Blanc Cassé/v17.png",
      "/images/Brillant/Blanc Cassé/Sans-titre-1sgqsdg.png",
      "/images/Brillant/Blanc Cassé/v17_d2.png",

    ]
  };
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <Navbar />
      <section className='bg-primary px-2 pt-20'>





        <div className='px-6   relative flex  flex-col items-center justify-center  text-center '>

          {/* Banner */}

          <div className='w-full h-full   rounded-custom imageBg '>
            <div
              className={`flex flex-col gap-6 p-10 justify-center text-[#01141B]  bg-[#FFD500]  h-full w-2/5 min-h-80
                  rounded-tl-custom-top-left rounded-br-custom-bottom-right`}

            >
              <p className=' text-2xl font-sans text-start pt-8'>Give the gift of travel</p>
              <h1 className='text-5xl font-bold pb-8 text-start'> Discover our last collections</h1>
            </div>
            <div className={`flex flex-row items-center justify-between p-0 pl-8 text-[#01141B] 
                  bg-[#FFD500] w-1/4 min-h-24 rounded-br-custom-bottom-right 
                  rounded-tr-custom-top-right  text-md font-sans text-md `}>Discover bestsellers

              <div className=" rounded-full  p-3 hover:bg-white mr-2 cursor-pointer   ">
                <FaArrowRight size={46} className='' />
              </div>
            </div>

          </div>
          {/* Banner end */}
          <Carousel />

        </div>




        <VideoScroll />
        <ScrollEffectWrapper >
          <div className='min-h-screen bg-white m-4 rounded-custom flex flex-row items-center' >
            <div className='w-1/4 flex flex-col items-center '>
              <div className='rounded-full w-[150px] h-[150px] bg-[#76c7e7]'>

              </div>
              <h1 className='text-[25px] leading-[130%] font-bold text-center px-6 mt-2 '>Choisis l'appareil qui te convient</h1>
              <p className='text-center px-6 text-[16px] mt-1 font-sans tracking-[0.00938rem] leading-[150%] '>Sélectionne ton appareil ainsi que la durée de location minimale.</p>
            </div>
            <div className='w-1/4 flex flex-col items-center '>
              <div className='rounded-full w-[150px] h-[150px] bg-[#f0e7ff]'>

              </div>
              <h1 className='text-[25px] leading-[130%] font-bold text-center px-6 mt-2 '>Choisis l'appareil qui te convient</h1>
              <p className='text-center px-6 text-[16px] mt-1 font-sans tracking-[0.00938rem] leading-[150%] '>Sélectionne ton appareil ainsi que la durée de location minimale.</p>
            </div><div className='w-1/4 flex flex-col items-center '>
              <div className='rounded-full w-[150px] h-[150px] bg-[#fcaa9f]'>

              </div>
              <h1 className='text-[25px] leading-[130%] font-bold text-center px-6 mt-2 '>Choisis l'appareil qui te convient</h1>
              <p className='text-center px-6 text-[16px] mt-1 font-sans tracking-[0.00938rem] leading-[150%] '>Sélectionne ton appareil ainsi que la durée de location minimale.</p>
            </div><div className='w-1/4 flex flex-col items-center '>
              <div className='rounded-full w-[150px] h-[150px] bg-[#a6cbac]'>

              </div>
              <h1 className='text-[25px] leading-[130%] font-bold text-center px-6 mt-2 '>Choisis l'appareil qui te convient</h1>
              <p className='text-center px-6 text-[16px] mt-1 font-sans tracking-[0.00938rem] leading-[150%] '>Sélectionne ton appareil ainsi que la durée de location minimale.</p>
            </div>
          </div>
        </ScrollEffectWrapper>
        <ScrollEffectWrapper >
          <h1 className="px-20 py-10 text-center text-3xl">
            Pourquoi une valise en polypropylène ?
          </h1>
          <p className='font-sans text-2xl text-center '>
            Rent the latest electronics and enjoy limitless freedom
          </p>
          <span className=""></span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            <CardComponent
              title="Opte pour l'économie"
              description="Avec Yuno, loue tes appareils en toute flexibilité. Cela préserve non seulement l'environnement, mais aussi ton porte-monnaie."
              bgColor="bg-[#DFB7FF]"
              iconUrl="https://yuno.ch/icons/whyYuno/moneyJar.svg"
              textColor="text-[#4B007E]"
            />
            <CardComponent
              title="Super service"
              description="Une question ou un commentaire à nous faire parvenir ? Contacte-nous par e-mail et nous te répondrons le plus rapidement possible."
              bgColor="bg-[#FFB4AB]"
              iconUrl="https://yuno.ch/icons/whyYuno/speech.svg"
              textColor="text-[#690005]"
            />
            <CardComponent
              title="Engagement écologique"
              description="Notre modèle de location circulaire aide à prolonger la vie des appareils et à diminuer les déchets électroniques."
              bgColor="bg-[#AAD0B1]"
              iconUrl="https://yuno.ch/icons/whyYuno/phone.svg"
              textColor="text-[#163721]"
            />
            <CardComponent
              title="Opte pour l'économie"
              description="Avec Yuno, loue tes appareils en toute flexibilité. Cela préserve non seulement l'environnement, mais aussi ton porte-monnaie."
              bgColor="bg-[#76C6E7]"
              iconUrl="https://yuno.ch/icons/whyYuno/umbrella.svg"
              textColor="text-[#00363E]"
            />
            <CardComponent
              title="Super service"
              description="Une question ou un commentaire à nous faire parvenir ? Contacte-nous par e-mail et nous te répondrons le plus rapidement possible."
              bgColor="bg-[#D1BFA5]"
              iconUrl="https://yuno.ch/icons/whyYuno/phoneCase.svg"
              textColor="text-[#574F43]"
            />
            <CardComponent
              title="Engagement écologique"
              description="Notre modèle de location circulaire aide à prolonger la vie des appareils et à diminuer les déchets électroniques."
              bgColor="bg-[#9FD67C]"
              iconUrl="https://yuno.ch/icons/whyYuno/earth.svg"
              textColor="text-[#143800]"
            />

          </div>


        </ScrollEffectWrapper>
        <div className='min-h-[160px]'></div>
       
        <ProductOnePage product={productExample} />
        <div className='bg-black min-h-48'></div>
       
      
       <div className='mb-24 bg-gray-100 p-4 flex flex-col items-center px-6 py-3 rounded-3xl shadow-sm'>
          <Image width={300} height={300}
            loading="lazy"
            src="/images/Brillant/Bleu Turquoise/v4_detaile6.png" alt={''} className=' rounded-lg ' />
             <div className='flex flex-row justify-between '>
            <div className='w-1/2 min-w-1/2 bg-yellow-100 '>Hello</div>
            <div className='w-1/2 min-w-1/2 bg-yellow-400 '>Hello</div>
          </div>
          </div>
         
          <div className="p-4">
      <ProductCard product={product} />
    </div>

      
      </section>
   
      <footer className='bg-[#01141b] min-h-svh'>
        <div className='flex justify-between pt-6'>
          <div className='flex flex-col justify-center items-start w-1/4 px-6'>
            <div className='rounded-full bg-[#FFD500] py-1 px-2 flex flex-col'>
              <Logo className='w-20 ' />
            </div>
            <p className='text-white text-start mt-3 font-sans text-[0.875rem]'>
              Une entreprise du groupe Migros 8002 Zürich 🇨🇭
            </p>
          </div>
          <div className='flex flex-col justify-center items-start w-1/4 px-6'>
            <div className='rounded-full  py-1 px-2 flex flex-col'>
              <p className='text-[1rem] text-[#FFD500] font-bold'>Services</p>
            </div>
            <p className='text-white text-start mt-3 font-sans text-[0.875rem]'>
              Une entreprise du groupe Migros 8002 Zürich 🇨🇭
            </p>
          </div> <div className='flex flex-col justify-center items-start w-1/4 px-6'>
            <div className='rounded-full  py-1 px-2 flex flex-col'>
              <p className='text-[1rem] text-[#FFD500] font-bold'>Société</p>
            </div>
            <p className='text-white text-start mt-3 font-sans text-[0.875rem]'>
              Une entreprise du groupe Migros 8002 Zürich 🇨🇭
            </p>
          </div> <div className='flex flex-col justify-center items-start w-1/4 px-6'>
            <div className='rounded-full  py-1 px-2 flex flex-col'>
              <p className='text-[1rem] text-[#FFD500] font-bold'>Contact</p>
            </div>
            <h1 className='text-white text-start mt-1 text-[20px] '>
              hello@titou.ca
            </h1>
            <div className='flex  w-full gap-x-10 items-center align-middle mt-2  '>
              <Image
                src="https://yuno.ch/_next/static/media/Instagram.793a4314.svg"
                alt=""
                width={20}
                height={20}

              />
              <Image
                src="https://yuno.ch/_next/static/media/facebook.e60616f9.svg"
                alt=""
                width={10}
                height={10}

              />  <Image
                src="https://yuno.ch/_next/static/media/linkedIn.be76f2a3.svg"
                alt=""
                width={20}
                height={20}

              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
