import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean;
    closeNav: ()=> void;
}

const MobileNav = ({closeNav, showNav}:Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div>
            {/* Overlay */}
            <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>

            {/* NavLinks  */}
            <div className={`fixed top-0 left-0 h-full w-[85vw] max-w-md bg-gradient-to-br from-rose-40 to-pink-40 backdrop-blur-lg 
                bg-opacity-95 shadow-2xl flex flex-col justify-center transform transition-all duration-300 
                ease-[cubic-bezier(0.22,1,0.36,1)] ${navOpen} z-[1050]`}>
                {/* Close button - Floating circle with modern design */}
                <button 
                    onClick={closeNav}
                    className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/17 backdrop-blur-sm transition-all 
                    duration-300 group cursor-pointer"
                    aria-label="Close menu"
                >
                    <CgClose className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Navigation Links with modern hover effects */}
                <nav className="px-8 space-y-8">
                    {navLinks.map((link) => (
                    <Link 
                        key={link.id} 
                        href={link.url}
                        onClick={closeNav}
                        className="group block overflow-hidden"
                    >
                        <div className="relative">
                        {/* Main link text with sliding underline */}
                        <p className="text-1xl sm:text-3xl font-medium text-white/90 group-hover:text-white transition-all duration-300 py-3 pl-2 transform group-hover:translate-x-2">
                            {link.label}
                            <span className="absolute bottom-0 left-0 h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 w-full"></span>
                        </p>
                        
                        {/* Subtle glow effect */}
                        <span className="absolute inset-0 bg-pink-100 opacity-0 group-hover:opacity-7 blur-md transition-opacity duration-300"></span>
                        </div>
                    </Link>
                    ))}
                </nav>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            </div>
        </div>
    )
}

export default MobileNav