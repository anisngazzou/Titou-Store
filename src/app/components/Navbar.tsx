import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiUser } from "react-icons/bi";
import { PiHandbag } from "react-icons/pi";

import Button from '@/app/components/Button';
import SearchInput from '@/app/components/SearchInput';

import Logo from '~/svg/Logo.svg';
import Products from '~/svg/products.svg';
const Navbar: React.FC = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };
const enEnum = ['en-US','en']
const frEnum = ['fr-FR','fr']
  return (
    <nav className={"bg-primary px-4 pt-4 pb-2 flex flex-col w-full fixed " + ` top-0 w-full  transition-transform duration-300 z-50 ${
        isScrollingUp ? 'transform translate-y-0  ' : 'transform -translate-y-full  '
      }`}>
  
      <div className='flex justify-between mt-2'>
      <div className="flex items-center space-x-8">
      <Logo className='w-24 mr-4' />
  
        <a href="#" className="text-black font-bold hover:text-[#b2ac9c7d] ">{t('navBar.home')}</a>
        <a href="#" className="text-black font-bold hover:text-[#b2ac9c7d]">{t('navBar.products')}</a>
        <a href="#" className="text-black font-bold hover:text-[#b2ac9c7d]">{t('navBar.aboutUs')}</a>
        <a href="#" className="text-black font-bold hover:text-[#b2ac9c7d]">{t('navBar.contact')}</a>
      </div>
    
      <div className='flex space-x-2 items-center'>
      <div className="flex items-center space-x-4">
        <Button className="flex items-center space-x-2">
          <BiUser size={24}/>
          <span>{t('navBar.login')}</span>
        </Button>

        <div className=" rounded-full bg-white p-2 hover:bg-[#b2ac9c7d]  ">
        <PiHandbag size={24}  />
        </div>
      </div>
          <button
            className={` ${enEnum.includes(i18n.language) ? 'text-black font-bold' : 'text-gray-400 font-normal'}`}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </button>
          <p className='font-bold text-black'>|</p>
          <button
            className={` ${frEnum.includes(i18n.language) ? 'text-black font-bold' : 'text-gray-400 font-normal'}`}
            onClick={() => handleLanguageChange('fr')}
          >
            FR
          </button>
        </div>
      </div>
    
    </nav>
  );
};


export default Navbar;
