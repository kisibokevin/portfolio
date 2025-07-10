'use client'
import { scrollToSection } from '@/lib/scroll';
import { Copyright } from 'lucide-react';
import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="bg-gray-900 text-gray-400 py-4 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm flex items-center gap-2.5">
                    <span>
                        <Copyright size={16}/>
                    </span>
                    {`${year} Kevin Newton. All rights reserved.`}
                </p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors duration-300">About</button>
                    <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors duration-300">Projects</button>
                    <button onClick={() => scrollToSection('experience')} className="hover:text-white transition-colors duration-300">Experience</button>
                    <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors duration-300">Contact</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer