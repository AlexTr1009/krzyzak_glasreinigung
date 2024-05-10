import React from 'react'
import Image from 'next/image'
import Logo from '../public/assets/logo.jpg'



const HeroStart = ({ currentPage }: { currentPage: string }) => {
    return (
      <div className='bg-black flex items-center gap-10 justify-center py-6 px-5 sm:flex sm:flex-col md:flex md:flex-col lg:py-6 lg:px-12 xl:py-8 xl:px-20 relative z-0'>
        <Image src={Logo} alt='Logo' className='w-60 md:w-72 lg:w-96 xl:w-[344px]' />
        <div className='flex flex-col justify-center sm:items-center sm:text-center md:items-center md:text-center md:px-5 lg:ml-6 xl:ml-12'>
          <h1 className="text-white text-xl md:text-2xl mdl:text-3xl lg:text-3xl xl:text-4xl font-inter font-semibold py-2">
            Glasreinigung | Fensterputzer
          </h1>
          <div className='flex flex-col gap-2'>
            <p className="text-textGray text-md lg:text-xl xl:text-xl font-inter font-light break-words">
              Oberhausen, Mülheim, Duisburg, Essen, Bottrop, Gladbeck und Dinslaken
            </p>
            <p className="text-textGray text-md lg:text-xl xl:text-xl font-inter font-light break-words">
              Für Gewerbebetriebe sowie Privathaushalte.
            </p>
          </div>
          <button className="btn xl:text-lg rounded-full h-[45px] w-[180px] xl:h-[50px] xl:w-[200px] mt-6">
            Rufen Sie mich an
          </button>
          <h1 className='text-4xl uppercase text-white pt-16 mdl:hidden lg:hidden xl:hidden'>{currentPage}</h1>
        </div>
      </div>
    )
  }
  

export default HeroStart
