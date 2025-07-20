"use client";
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'

type Props = {
    openNav: ()=> void;
}

const Nav = ({openNav}:Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 90) setNavBg(true);
            if(window.scrollY < 90) setNavBg(false);
        };
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <div className={`${navBg ? 'bg-blue-950 shadow-md' : ''} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
            <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-rose-500 rounded-full flex items-center justify-center shrink-0">
                    <TbAirBalloon className='w-4 h-4 sm:w-6 sm:h-6 text-white' />
                    </div>
                    <h1 className="text-lg sm:text-xl md:text-2xl text-white uppercase font-bold tracking-tight">
                    Wils
                    </h1>
                </div>

                {/* NavLinks - Meilleure gestion des breakpoints */}
                <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    {navLinks.map((link) => (
                    <Link 
                        href={link.url} 
                        key={link.id}
                        className="relative group"
                    >
                        <span className="text-white text-sm md:text-base font-medium transition-colors duration-200 hover:text-yellow-300">
                        {link.label}
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    ))}
                </nav>

                {/* Buttons - Meilleure hiérarchie visuelle */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                    <button className="px-4 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-2.5 text-sm sm:text-base font-medium text-black bg-white hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">
                    Book Now
                    </button>
                    
                    {/* Menu mobile - Meilleure accessibilité */}
                    <button 
                    onClick={openNav} 
                    aria-label="Menu" 
                    className="lg:hidden p-1 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                    <HiBars3BottomRight className='w-6 h-6 sm:w-8 sm:h-8' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav