"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './sub/button';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 text-white w-full max-w-[1200px] p-4 mx-auto md:p-8 z-50">
      <div className="h-auto md:h-[80px] px-6 py-4 flex justify-between items-center bg-[#40121E]  outline-none  rounded-xl backdrop-blur-sm">

       <Link href="/"><div className="text-lg md:text-xl font-bold">PaiNgaiDee</div></Link> 

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <Image
            height={32}
            width={32}
            src={isOpen ? "/items/arrow-down.svg" : "/items/arrow-up.svg"}
            alt={isOpen ? 'Close Menu' : 'Open Menu'}
            className={`transition-transform duration-300 ${isOpen ? 'scale-90 ' : 'scale-100 opacity-100'}`}
          />
        </div>

        <div className="hidden md:flex gap-8 items-center font-bold">
          <Link href="/" className="Link" >หน้าหลัก</Link>
          <Link href="Like" className="Link" >รายการโปรด</Link>
          <Link href="#qandme" className="Link" >โปรไฟล์</Link>
        </div>
        <div className="hidden md:flex gap-4">
          <Button label='Log in'></Button>
        </div>

        {isOpen && (
      <div
      className={`absolute top-[100%] left-0 right-0 bg-[#D0B473] backdrop-blur-sm text-start p-4 rounded-lg flex flex-col items-start md:hidden transition-all duration-500 ease-in-out transform ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <Link href="/" className="flex justify-center items-center py-2 gap-4 text-lg font-bold" onClick={toggleMenu}>
        <Image
          src="/items/home.svg"
          width={20}
          height={20}
          alt="Home icon"
        />
        หน้าหลัก
      </Link>
      <Link href="Like" className="flex justify-center items-center py-2 gap-4 text-lg font-bold" onClick={toggleMenu}>
        <Image
          src="/items/heart.svg"
          width={20}
          height={20}
          alt="Favorite icon"
        />
        รายการโปรด
      </Link>
      <Link href="#qandme" className="flex justify-center items-center py-2 gap-4 text-lg font-bold" onClick={toggleMenu}>
        <Image
          src="/items/profile.svg"
          width={20}
          height={20}
          alt="Profile icon"
        />
        โปรไฟล์
      </Link>
    </div>
    
      
      )}

      </div>
    </div>
  );
};

export default Navbar;
