"use client"
import React, { useRef, useEffect, useState } from 'react';
import './globals.css'
import Link from 'next/link';

const Page = () => {
  
  return (
    <div className='kapsa'>
      {/* Model Y Section */}
      <div  className="y relative h-screen flex flex-col items-center justify-center">
         {/* Video eklendi */}
      <video autoPlay loop muted className='section w-full h-full object-cover absolute top-0 left-0'>
        <source src="/modelyy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="absolute top-20 left-0 w-full flex flex-col items-center">
          <p className="text-5xl text-gray-100 font-medium z-10 mt-16">Model Y</p>
          <Link className='hover:opacity-80 underline text-gray-100 font-bold transition-all hover:underline-hover z-10 mt-5' href={""}>
            Test Sürüşü Planla
          </Link>
        </div>
        <div className='sip absolute text-center md:flex justify-center items-center  gap-5'>
          <button className='bg-white font-bold opacity-80 w-96  h-10 mt-20  md:w-72 md:h-10 rounded-md'>Daha Hızlı Teslimat</button>
          <button className='bg-black font-bold opacity-70 text-white w-96 h-10 mt-2 md:w-72 md:h-10 md:mt-20 rounded-md'>Özel Sipariş</button>
        </div>
       
      </div>

      {/* Model 3 Section */}
      <div className='y relative h-screen flex flex-col items-center justify-center'>
        <img className='section w-full h-full object-cover' src="/md3.jpg" alt="" />
        <div className="absolute top-20 left-0 w-full flex flex-col items-center">
          <p className="text-5xl text-gray-100 font-medium z-10 mt-16">Model 3</p>
        </div>
        <div className='sip absolute text-center md:flex justify-center items-center gap-5'>
          <button className='bg-black font-bold opacity-80 w-96  h-10 mt-20  md:w-72 md:h-10 text-white rounded-md'>Güncellemeleri Al</button>
          <button className='bg-white font-bold opacity-70 text-black w-96  h-10 mt-2 md:w-72 md:h-10 md:mt-20 rounded-md'>Ek Bilgi</button>
        </div>
        
      </div>

      {/* Model S Section */}
      <div  className='y relative h-screen flex flex-col items-center justify-center'>
        <img className='section w-full h-full object-cover' src="/siyah.jpg" alt="" />
        <div className="absolute top-20 left-0 w-full flex flex-col items-center">
          <p className="text-5xl text-gray-100 font-medium z-10 mt-16">Model S</p>
        </div>
        <div className='sip absolute text-center md:flex justify-center items-center gap-5'>
          <button className='bg-black font-bold opacity-80 w-96 h-10 mt-20 md:w-72 md:h-10 text-white rounded-md'>Güncellemeleri Al</button>
          <button className='bg-white font-bold opacity-70 text-black w-96  h-10 mt-2  md:w-72 md:h-10 md:mt-20 rounded-md'>Ek Bilgi</button>
        </div>
       
      </div>

      {/* Model X Section */}
      <div className='y relative h-screen flex flex-col items-center justify-center'>
        <img className='section w-full h-full object-cover' src="/mx.jpg" alt="" />
        <div className="absolute top-20 left-0 w-full flex flex-col items-center">
          <p className="text-5xl text-gray-100 font-medium z-10 mt-16">Model X</p>
        </div>
        <div className='sip absolute text-center md:flex justify-center items-center gap-5'>
          <button className='bg-black font-bold opacity-80 w-96  h-10 mt-20 md:w-72 md:h-10 text-white rounded-md'>Güncellemeleri Al</button>
          <button className='bg-white font-bold opacity-70 text-black w-96  h-10 mt-2 md:w-72 md:h-10 md:mt-20 rounded-md'>Ek Bilgi</button>
        </div>
      
      </div>

      {/* Tesla Experience Section */}
      <div className='y relative son h-screen flex flex-col items-center justify-center'>
      <video autoPlay loop muted className='section w-full h-full object-cover absolute top-0 left-0'>
        <source src="/rek.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="absolute top-20 left-0 w-full flex flex-col items-center">
          <p className="text-4xl md:text-5xl text-gray-100 font-medium z-10 mt-16">Tesla'yı Deneyimleyin</p>
          <p className="text-gray-100 font-medium z-10 mt-5">Bugün Bir Test Sürüşü Planla</p>
        </div>
        <div className='sip absolute flex justify-center items-center gap-5 mb-10'>
          <button className='font-bold border-gray-100 border-2 w-72 h-10 text-gray-100 rounded-md hover:bg-gray-800 hover:text-white'>Test Sürüşü</button>
        </div>
        <div className=' foo absolute  flex justify-center items-center gap-3  '>
      <Link className={"hover:opacity-80  text-white text-xs  md:text-sm transition-all  z-10"} href={""}>Tesla © 2023</Link>
      <Link className={"hover:opacity-80  text-white text-xs  md:text-sm transition-all  z-10"} href={""}>Gizlilik ve Mevzuat</Link>
      <Link className={"hover:opacity-80  text-white text-xs  md:text-sm transition-all  z-10"} href={""}>İletişim</Link>
      <Link className={"hover:opacity-80  text-white text-xs  md:text-sm transition-all  z-10"} href={""}>Güncellemeleri Al</Link>
      <Link className={"hover:opacity-80  text-white  text-xs md:text-sm transition-all  z-10"} href={""}>Konumlar</Link>
    </div>
      
      </div>

      {/* Upward Arrow */}
    </div>
  );
};

export default Page;
