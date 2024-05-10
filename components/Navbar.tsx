"use client";
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const navLinks = [
    {name: "Home", href: "/"},
    {name: "Preise", href: "/preise"},
    {name: "Kontakt", href: "/kontakt"},
    {name: "Impressum", href: "/impressum"},
    {name: "Datenschutz", href: "/datenschutz"},

];

export function Navbar({ currentPage }: { currentPage: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav >
            <div className="flex flex-row gap-3 items-center justify-between pt-20 md:hidden sm:hidden">
                {navLinks.map((item, index) => (
                    <Link
                        key={index}
                        className={`text-white font-light flex flex-row justify-center items-center h-[50px] w-[130px] text-md xl:h-[60px] xl:w-[150px] xl:text-lg hover:scale-105 transition-all duration-300 ${
                            item.name === currentPage 
                                ? "bg-gradient-to-r from-primary to-secondary " 
                                : "bg-gradient-to-b from-primaryGray to-secondaryGray  hover:text-primary"
                        } `}
                        href={item.href}>
                            {item.name}
                            
                    </Link>
                ))}
            </div>
            <div className='xl:hidden lg:hidden mdl:hidden'>
                <div className="bg-black">
                    <nav className="flex items-center justify-between flex-wrap p-6">
                        <div className="relative inline-block text-left">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex justify-center w-full">
                                <FaBars size={40} color="#599B41" className=''/>
                            </button>
                            {isOpen && (
                            <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-primaryGray">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                {navLinks.map((item, index) => (
                                    <a 
                                    key={index} 
                                    href={item.href} 
                                    className={`block px-4 py-2 text-sm hover:bg-secondaryGray hover:text-primary ${
                                        item.name === currentPage 
                                        ? "text-primary" 
                                        : "text-white"
                                    } `}
                                    role="menuitem">
                                        {item.name}
                                    </a>
                                ))}
                                </div>
                            </div>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </nav>
    )
}