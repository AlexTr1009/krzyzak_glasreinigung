"use client"
import React from 'react';
import Image from 'next/image'
import Logo from '../public/assets/logo.jpg'
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

export function Footer() {

  const handleWhatsApp = () => {
    const phoneNumber = '01773133857';
    const message = 'Hallo! Ich möchte mehr Informationen erhalten.';
    const encodedMessage = encodeURIComponent(message);
    const url = 'https://wa.me/491773133857';
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    const url = `mailto:mail@fensterreinigung-ob.de`;
    window.location.href = url;
  };

  const handlePhone = () => {
    const url = `tel:01773133857`;
    window.location.href = url;
  };

  return (
    <footer className="w-full items-center p-4 bg-black text-white">
        <aside className="w-full flex flex-row  justify-center items-center gap-10 md:py-5 sm:py-5">
          <Image src={Logo} alt='Logo' className='w-40 mdl:w-32 lg:w-36 xl:w-48'/>
          <div className='flex flex-row gap-5 items-center md:flex-col sm:flex-col'>
            <p className='text'>
                A. Krzyzak Glasreinigung<br/>
                Herderstr. 66<br/>
                46045 Oberhausen
            </p>
            <div className='flex flex-row gap-5 pl-32 md:pl-0 sm:pl-0 md:order-first sm:order-first'>
                <FaWhatsapp onClick={handleWhatsApp} size={40} color="#599B41" className='hover:scale-105 sm:h-[35px]'/>
                <FaEnvelope onClick={handleEmail} size={40} color="#599B41" className='hover:scale-105 sm:h-[35px]'/>
                <FaPhone onClick={handlePhone} size={38} color="#599B41" className='hover:scale-105 sm:h-[35px]'/>
            </div>
          </div>
        </aside>
    </footer>
  );
};

