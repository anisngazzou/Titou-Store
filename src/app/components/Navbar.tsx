import React from 'react';
import { BiUser } from "react-icons/bi";
import { PiHandbag } from "react-icons/pi";

import Button from '@/app/components/Button';
import SearchInput from '@/app/components/SearchInput';

import Logo from '~/svg/Logo.svg';
import Products from '~/svg/products.svg';
const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary p-4 flex flex-col w-full ">
      <div className='flex justify-between mt-2'>
      <div className="flex items-center space-x-8">
      <Logo className='w-24 mr-4' />
  
        <a href="#" className="text-black font-bold hover:text-[#b2ac9c7d] ">Pourquoi Titou</a>
        <a href="#" className="text-black font-bold hover:text-[#b2ac9c7d]">Comment ça marche</a>
        <a href="#" className="text-black font-bold hover:text-[#b2ac9c7d]">Nouveautés</a>
      </div>
      <div className='flex space-x-2'>
       <p className='font-normal text-gray-400'>EN</p> <p className='font-bold text-black'>|</p>  <p className='font-bold text-black'>FR</p>
      </div>
      </div>
      <div className="flex items-center justify-between py-4">
      <Button className="flex items-center space-x-2 bg-white text-black font-semibold">
      
        <Products className="w-6"/>
        <span>Produits</span>
      </Button>
      <SearchInput placeholder="Cherche un produit..." className="w-full" />
      <div className="flex items-center space-x-4">
        <Button className="flex items-center space-x-2">
          <BiUser size={24}/>
          <span>Se connecter</span>
        </Button>

        <div className=" rounded-full bg-white p-2 hover:bg-[#b2ac9c7d]  ">
        <PiHandbag size={24}  />
        </div>
      </div>
  
        
      </div>
    </nav>
  );
};


export default Navbar;
