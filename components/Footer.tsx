'use client'
import { scrollToSection } from '@/lib/scroll';
import { Copyright, Github, Linkedin, Twitter } from 'lucide-react';
import React from 'react';
import Button from './ui/button';

const footerLinks = [
    { label: 'About Me', id: 'about', title: 'Learn about my skills and experience' },
    { label: 'Explore Projects', id: 'projects', title: 'View my recent projects' },
    { label: 'My Experience', id: 'experience', title: 'See my professional journey' },
    { label: 'Get in Touch', id: 'contact', title: 'Contact me for collaboration' },
];

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: <Github className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100" />, ariaLabel: "Visit Kevin's GitHub" },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: <Linkedin className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100" />, ariaLabel: "Visit Kevin's LinkedIn" },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: <Twitter className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100" />, ariaLabel: "Visit Kevin's Twitter" },
];

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 dark:text-gray-300 py-4 px-4" role="contentinfo" aria-label="Footer with navigation and contact links">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse justify-between items-center">
                <div className="flex flex-col md:flex-row gap-6 mt-4 md:mt-0 items-center">
                    <div className="flex gap-4">
                        {footerLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-xs hover:text-white dark:hover:text-gray-100 transition-colors duration-300"
                                title={link.title}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300"
                                aria-label={link.ariaLabel}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <Button
                        onClick={() => scrollToSection('contact')}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 text-sm"
                        aria-label="Contact Kevin for collaboration"
                    >
                        Hire Me Today
                    </Button>
                </div>
                <p className="text-xs flex items-center gap-2.5" aria-label="Copyright information">
                    <span>
                        <Copyright size={16} className="text-gray-400 dark:text-gray-300" />
                    </span>
                    {`${year} Kevin Newton. Building impactful web solutions. All rights reserved.`}
                </p>
            </div>
        </footer>
    );
};

export default React.memo(Footer);