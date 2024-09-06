

import { Metadata } from 'next';
import Head from 'next/head';
import * as React from 'react';
import Image from 'next/image';
import Logo from '~/svg/Logo.svg';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Navbar from '@/app/components/Navbar';
import { siteConfig } from '@/constant/config';
// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='bg-primary'>
      <Head>
        <title>Hi</title>
      </Head>
      <Navbar />
        {children}
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
        </body>
    </html>
  );
}
