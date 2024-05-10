import Image from "next/image";
import HeroStart from "@/components/HeroStart";
import Background_xl from '../../public/assets/background_xl.png';
import Background_md from '../../public/assets/background_md.jpg';
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { PreiseText } from "@/components/PreiseText";
import { PreiseTags } from "@/components/PreiseTags";



export default function Preise() {
  return (
  <main className="relative min-h-screen">
    <div className="relative xl:hidden lg:hidden mdl:hidden z-10">
      <Navbar currentPage="Preise"/>
    </div>
    <HeroStart currentPage={"Preise"}/>

    {/* <div className="relative bg-gradient-to-b from-black to-[#292929]"> */}
    <div className="relative bg-gradient-to-b from-black to-[#171717]">
      <Image src={Background_xl} className="w-full xl:h-[850px] lg:h-[850px] h-[1200px]  object-cover mix-blend-overlay" alt="Background"/>
      <div className="absolute inset-0 h-auto">
        <div className="relative w-full flex justify-center items-center md:absolute md:top-0 z-20 md:hidden sm:hidden">
          <Navbar currentPage={"Preise"}/>
        </div>

        {/* Body */}
        <div className="w-full grid grid-rows-2 grid-flow-col gap-10 mdl:gap-0 lg:gap-0 xl:gap-0 lg:grid-cols-2 lg:grid-rows-1 lg:grid-flow-row xl:grid-cols-2 xl:grid-rows-1 xl:grid-flow-row items-center xl:pt-32 lg:pt-32 pt-10">
          <div className="w-full px-10 xl:px-16">
            <PreiseText/>
          </div>
          <div className="w-full px-10 xl:px-0 lg:px-0">
            <PreiseTags/>
          </div>
        </div>


        

        
      </div>

    </div>
    <Footer/>
    

  </main>
  );
}

