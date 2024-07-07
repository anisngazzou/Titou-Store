'use client';

import Head from 'next/head';
import * as React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import '@/lib/env';

import Navbar from '@/app/components/Navbar';
import Carousel from '@/app/components/Carousel';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-primary px-2'>
        <Navbar />
        <div className='px-6  relative flex  flex-col items-center justify-center py-12 text-center'>
          <div className='w-full   rounded-custom imageBg '>
            <div
              className={`flex flex-col gap-6 p-10 justify-center text-[#01141B] bg-[#FFD500] h-full w-2/5 min-h-80
                  rounded-tl-custom-top-left rounded-br-custom-bottom-right`}

            >
              <p className=' text-2xl font-normal pt-8'>Give the gift of travel</p>
              <h1 className='text-5xl el-messiri-titleOne pb-8'> Discover our last collections</h1>
            </div>
            <div className={`flex flex-row items-center justify-between p-0 pl-16 text-[#01141B] 
                  bg-[#FFD500] max-w-[320px] min-h-24 rounded-br-custom-bottom-right 
                  rounded-tr-custom-top-right  text-md font-normal`}>Discover bestsellers

              <div className=" rounded-full  p-3 hover:bg-white mr-2 cursor-pointer   ">
                <FaArrowRight size={46} className='' />
              </div>
            </div>
          </div>
          <Carousel />
        </div>
      </section>
    </main>
  );
}
