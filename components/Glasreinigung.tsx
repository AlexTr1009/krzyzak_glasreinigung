"use client"
import React from 'react'
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';


export function Glasreinigung() {
    
    const handleWhatsApp = () => {
        const phoneNumber = '01773133857';
        const message = 'Hallo! Ich möchte mehr Informationen erhalten.';
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}`;
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

    return(
        <div>
            <h1 className='header pb-5'>GLASREINIGUNG</h1>
            <div className='text'>
                <span className='font-medium text-3xl md:text:xl sm:text-xl'>
                    A. Krzyzak<br/>
                </span>
                <span>
                    <br/>
                    Wir  sind Ihre Fensterputzer in Oberhausen, Mülheim, Duisburg, Essen,  Bottrop, Gladbeck und Dinslaken für Gewerbebetriebe sowie Privathaushalte.<br/>
                    Auf unserer Webseite finden Sie umfassende Informationen rund um unsere Dienstleistungen.<br/>
                    <br/>
                    Sollten Sie an einem unserer Services interessiert sein, kontaktieren Sie uns gerne per:
                </span>
            </div>
            <div className='flex flex-row mt-3 gap-3'>
                <button onClick={handleWhatsApp} className='btn h-[55px] w-[155px] md:w-[115px] md:h-[60px] sm:w-[115px] rounded flex flex-row md:flex-col sm:flex-col justify-center items-center gap-1 md:gap-0 sm:gap-0 px-2'>
                    <FaWhatsapp size={38} color="white" className="md:h-[28px] sm:h-[25px]"/>
                    <p className='text-white text-lg md:text-base sm:text-base text-center'>
                        WhatsApp
                    </p>
                </button>
                <button onClick={handleEmail} className='btn h-[55px] w-[155] md:w-[115px] md:h-[60px] sm:w-[115px] rounded flex flex-row md:flex-col sm:flex-col justify-center items-center gap-2 md:gap-0 sm:gap-0 px-2'>
                    <FaEnvelope size={35} color="white" className="md:h-[28px] sm:h-[25px]"/>
                    <p className='text-white text-lg md:text-base sm:text-base text-center'>
                        Email
                    </p>
                </button>
                <button onClick={handlePhone} className='btn h-[55px] w-[155] md:w-[115px] md:h-[60px] sm:w-[115px] rounded flex flex-row md:flex-col sm:flex-col justify-center items-center gap-1 md:gap-0 sm:gap-0 px-2'>
                    <FaPhone size={33} color="white" className="md:h-[23px] sm:h-[23px]"/>
                    <p className='text-white text-lg md:text-base sm:text-base text-center'>
                        Telefon
                    </p>
                </button>
            </div>
        </div>
    )
}