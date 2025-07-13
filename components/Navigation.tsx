'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import ThemeToggle from './ThemeToggle';
import { AnimatePresence, motion } from 'framer-motion';
import useScrollSpy from '@/hooks/useScrollSpy';
import Image from 'next/image';


const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
];

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const sectionIds = ['home', 'about', 'projects', 'experience', 'contact'];
    const activeId = useScrollSpy({ sectionIds });
    // const [activeId, setActiveId] = useState<string | null>(null);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false); // Close mobile
        }
    };


    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div
                        className="flex text-lg items-center gap-2 cursor-pointer font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600"
                        onClick={() => scrollToSection('home')}
                    >
                        <Image src="/Logo Version 1-01.svg" alt="Logo" width={50} height={50} />
                        
                        {/* <h3 className=" ">Kevin Newton Kisibo</h3> */}
                    </div>
                    

                    {/* Desktop */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={clsx(
                                "text-sm font-medium cursor-pointer transition-colors",
                                activeId === item.id
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                                )}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Theme toggle */}
                    <ThemeToggle />

                    {/* Mobile menu icon */}
                    <div className="md:hidden">
                        <button
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-sm"
                    >
                    <div className="px-4 py-4 space-y-2 flex flex-col">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={clsx(
                                "text-base text-left font-medium transition-colors",
                                activeId === item.id
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                                )}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;
