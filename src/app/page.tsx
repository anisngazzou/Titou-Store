'use client';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import '@/lib/env';


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




  return (
    <main>
     
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
         <div className='flex flex-col gap-2 min-h-screen bg-white m-4 rounded-custom '>
         <div className='  flex flex-row items-center  mt-36  ' >
            <div className='w-1/4 flex flex-col items-center   '>
              <div className='rounded-full w-[150px] h-[150px] bg-[#76c7e7] flex items-center justify-center '>
              <img src='https://titou.ma/wp-content/uploads/2024/01/camion-100x100.png'/>
              </div>
             
            </div>
            <div className='w-1/4 flex flex-col items-center  '>
              <div className='rounded-full w-[150px] h-[150px] bg-[#f0e7ff] flex items-center justify-center '>
              <img src='https://titou.ma/wp-content/uploads/2024/01/paiement-securise-100x100.png'/>

              </div>
              
            </div>
            <div className='w-1/4 flex flex-col items-center  '>
              <div className='rounded-full w-[150px] h-[150px] bg-[#fcaa9f] flex items-center justify-center '>
              <img src='https://titou.ma/wp-content/uploads/2024/01/service-clients-100x100.png'/>

              </div>
             
            </div>
            <div className='w-1/4 flex flex-col items-center  '>
              <div className='rounded-full w-[150px] h-[150px] bg-[#a6cbac] flex items-center justify-center '>
              <img src='https://titou.ma/wp-content/uploads/2024/01/remise-en-argent-100x100.png'/>

              </div>
             
            </div>
          </div>

          <div className=' flex flex-row   ' >
            <div className='w-1/4 flex flex-col items-center   '>
             <h1 className='text-[25px] leading-[130%] font-bold text-center px-6 mt-2 '>Livraison gratuite</h1>
              <p className='text-center px-6 text-[16px] mt-1 font-sans tracking-[0.00938rem] leading-[150%] '>Commandez maintenant – Aucun frais de livraison.</p>
             
            </div>
            <div className='w-1/4 flex flex-col items-center  '>
            <h1 className='text-[25px] leading-[130%] font-bold text-center px-6 mt-2 '>Paiement 100% sécurisé</h1>
            <p className='text-center px-6 text-[16px] mt-1 font-sans tracking-[0.00938rem] leading-[150%] '>Achetez en toute confiance..</p>
              
            </div>
            <div className='w-1/4 flex flex-col items-center  '>
            <h1 className='text-[25px] leading-[130%] font-bold text-center px-6 mt-2 '>Service clientèle</h1>
            <p className='text-center px-6 text-[16px] mt-1 font-sans tracking-[0.00938rem] leading-[150%] '>De 9h30-13h00 / 14h00-17h30.</p>
             
            </div>
            <div className='w-1/4 flex flex-col items-center  '>
            <h1 className='text-[25px] leading-[130%] font-bold text-center px-6 mt-2 '>Satisfait ou remboursé</h1>
            <p className='text-center px-6 text-[16px] mt-1 font-sans tracking-[0.00938rem] leading-[150%] '>15 jours de délai de rétractation.</p>
             
            </div>
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
              title=" Poids léger"
              description="Avec Yuno, loue tes appareils en toute flexibilité. Cela préserve non seulement l'environnement, mais aussi ton porte-monnaie."
              bgColor="bg-[#DFB7FF]"
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/plumes-90x90.png"
              textColor="text-[#4B007E]"
            />
            <CardComponent
              title="Sécurité"
              description="Une question ou un commentaire à nous faire parvenir ? Contacte-nous par e-mail et nous te répondrons le plus rapidement possible."
              bgColor="bg-[#FFB4AB]"
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/bouclier-securise-90x90.png"
              textColor="text-[#690005]"
            />
            <CardComponent
              title="Valises à 4 roues"
              description="Notre modèle de location circulaire aide à prolonger la vie des appareils et à diminuer les déchets électroniques."
              bgColor="bg-[#AAD0B1]"
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/roue-de-voiture1-90x90.png"
              textColor="text-[#163721]"
            />
            <CardComponent
              title="Plusieurs tailles"
              description="Avec Yuno, loue tes appareils en toute flexibilité. Cela préserve non seulement l'environnement, mais aussi ton porte-monnaie."
              bgColor="bg-[#76C6E7]"
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/escalader-90x90.png"
              textColor="text-[#00363E]"
            />
            <CardComponent
              title="Extensible"
              description="Une question ou un commentaire à nous faire parvenir ? Contacte-nous par e-mail et nous te répondrons le plus rapidement possible."
              bgColor="bg-[#D1BFA5]"
              iconUrl="	https://www.titou.ma/wp-content/uploads/2024/01/taille-reelle-90x90.png"
              textColor="text-[#574F43]"
            />
            <CardComponent
              title="Haute qualité 100%"
              description="Notre modèle de location circulaire aide à prolonger la vie des appareils et à diminuer les déchets électroniques."
              bgColor="bg-[#9FD67C]"
              iconUrl="https://www.titou.ma/wp-content/uploads/2024/01/pp-90x90.png"
              textColor="text-[#143800]"
            />

          </div>


        </ScrollEffectWrapper>
        <div className='min-h-[160px]'></div>
       
        
    
       
      

      
      </section>
   
      
    </main>
  );
}
