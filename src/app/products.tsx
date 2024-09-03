'use client';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import '@/lib/env';
import '../lib/i18n';

import Navbar from '@/app/components/Navbar';
import ProductPage from '@/app/components/ProductsPage';

import Logo from '~/svg/Logo.svg';



export default function productsPage() {
  
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <Navbar />
      <section className='bg-primary px-2 pt-20'>
        
     
        
       



        
    


 

<ProductPage />
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
                  src={'https://yuno.ch/_next/static/media/Instagram.793a4314.svg'}
                  alt={''}
                  width={20}
                  height={20}
                 
                />
                  <Image
                  src={'https://yuno.ch/_next/static/media/facebook.e60616f9.svg'}
                  alt={''}
                  width={10}
                  height={10}
                 
                />  <Image
                src={'https://yuno.ch/_next/static/media/linkedIn.be76f2a3.svg'}
                alt={''}
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
