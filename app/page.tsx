import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import HeroStart from "@/components/HeroStart";
import Background_xl from '../public/assets/background_xl.png';
import Background_md from '../public/assets/background_md.jpg';
import { UeberUns } from "@/components/UeberUns";
import styles from './styles.module.css';
import { Glasreinigung } from "@/components/Glasreinigung";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
  <main className="relative min-h-screen">
    <div className="relative xl:hidden lg:hidden mdl:hidden z-10">
      <Navbar currentPage={"Home"}/>
    </div>
    <HeroStart currentPage={"Home"}/>

    <div className="relative bg-gradient-to-b from-black to-[#171717]">
      <Image src={Background_xl} className="w-full xl:h-[1800px] lg:h-[2000px] object-cover mix-blend-overlay mdl:hidden md:hidden sm:hidden" alt="Background"/>
      <Image src={Background_md} className="w-full xl:hidden lg:hidden mdl:h-[2700px] md:h-[3200px] sm:h-[3000px] object-cover mix-blend-overlay" alt="Background"/>
      <div className="absolute inset-0 h-auto">
        <div className="relative w-full flex justify-center items-center md:absolute md:top-0 z-20 md:hidden sm:hidden">
          <Navbar currentPage={"Home"}/>
        </div>

        <div className="flex flex-row pt-40 md:flex-col sm:flex-col mdl:flex-col mdl:gap-16 md:gap-16 sm:gap-16">
          <div className="px-10 xl:px-0 lg:px-0 mdl:pt-20 md:pt-20 sm:pt-10 xl:w-1/2 lg:w-1/2">
            <UeberUns/>
          </div>
          <div className="w-1/2 md:w-full sm:w-full md:order-first sm:order-first mdl:w-full mdl:order-first">
            <p className={`${styles.linearWipe} xl:text-5xl text-center lg:text-4xl mdl:text-4xl md:text-4xl sm:text-3xl py-10 px-10 md:pt-0 sm:pt-0 mdl:pt-0`}>Ihr zuverlässiger und professioneller Partner im Ruhrgebiet!</p>
            <div className='xl:px-28 px-10 pt-10'> 
              <Glasreinigung/>
            </div>
          </div>
        </div>
        <Reviews/>
        
      </div>

    </div>
    <Footer/>
    

  </main>
  );
}

