
"use client"
// Import gerekli modüller
import React, { useState } from 'react';
import Link from 'next/link';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='relative'>
      {/* Açılır menü butonu ve logo */}
      <div className='flex justify-between items-center gap-5 h-12 p-5 w-full bg-opacity-100 fixed z-10'>
        <Link href={'/'} className='text-gray-100 rounded-lg p-3 text-xl md:text-2xl font-bold cursor-pointer tracking-widest hover:opacity-80'>
          TESLA
        </Link>
        <div className='hidden md:flex gap-5 text-gray-100 font-bold'>
          <Link className='hover:opacity-80' href={''}>
            Araçlar
          </Link>
          <Link className='hover:opacity-80' href={''}>
            Enerji
          </Link>
          <Link className='hover:opacity-80' href={''}>
            Şarj
          </Link>
          <Link className='hover:opacity-80' href={''}>
            Keşfet
          </Link>
        </div>
        <div className='flex gap-3 text-gray-100 mr-2'>
          <FaRegCircleQuestion className='cursor-pointer' size={25} />
          <TbWorld className='cursor-pointer' size={25} />
          <FaRegUserCircle className='cursor-pointer' size={25} />
          <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </div>

      {/* Overlay (diğer sayfa içeriklerini kapatmak için) */}
      {menuVisible && (
        <div className='md:hidden fixed top-0 left-0 w-full h-full bg-white  flex items-center justify-center z-20'>
          <div className='flex flex-col items-center gap-3'>
            <div className='cursor-pointer font-bold text-gray-800 text-2xl ' onClick={toggleMenu}>
              ✕
            </div>
            <Link className='hover:opacity-80 text-2xl text-gray-600' href={''}>
              Araçlar
            </Link>
            <Link className='hover:opacity-80 text-2xl text-gray-600' href={''}>
              Enerji
            </Link>
            <Link className='hover:opacity-80 text-2xl text-gray-600' href={''}>
              Şarj
            </Link>
            <Link className='hover:opacity-80 text-2xl text-gray-600' href={''}>
              Keşfet
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
