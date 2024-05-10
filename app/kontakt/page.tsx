import Image from "next/image";
import HeroStart from "@/components/HeroStart";
import Background_xl from '../../public/assets/background_xl.png';
import Background_md from '../../public/assets/background_md.jpg';
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { PreiseText } from "@/components/PreiseText";
import { Infos } from "@/components/Infos";
import  Kontaktformular  from "@/components/Kontaktformular";
import ContactForm from "@/components/ContactForm";




export default function Kontakt() {
  return (
  <main className="relative min-h-screen">
    <div className="relative xl:hidden lg:hidden mdl:hidden z-10">
      <Navbar currentPage={"Kontakt"}/>
    </div>
    <HeroStart currentPage={"Kontakt"}/>

    <div className="relative bg-gradient-to-b from-black to-[#171717]">
      <Image src={Background_xl} className="w-full xl:h-[850px] lg:h-[850px] sm:h-[1350px] mdl:h-[1300px] h-[1150px] object-cover mix-blend-overlay" alt="Background"/>
      <div className="absolute inset-0 h-auto">
        <div className="relative w-full flex justify-center items-center md:absolute md:top-0 z-20 md:hidden sm:hidden">
          <Navbar currentPage={"Kontakt"}/>
        </div>

        {/* Body */}
        <div className="w-full grid grid-rows-2 grid-flow-col md:gap-10 mdl:gap-10 lg:gap-0 xl:gap-0 lg:grid-cols-8 lg:grid-rows-1 lg:grid-flow-row xl:grid-cols-8 xl:grid-rows-1 xl:grid-flow-row items-center pt-20 xl:pt-32 lg:pt-32 sm:pt-0 ">
          <div className="w-full px-10 xl:px-16 lg:col-span-4 xl:col-span-5">
            <Kontaktformular/>
          </div>
          <div className="w-full px-10 xl:px-0 lg:px-0 lg:col-span-4 xl:col-span-3">
            <Infos/>
          </div>
        </div>
      </div>
    </div>
    <Footer/>

  </main>
  );
}

