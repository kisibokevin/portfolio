// 'use client'
// import React, { useEffect, useState } from 'react'
// import Button from './ui/button'
// import { scrollToSection } from '@/lib/scroll'
// import { ChevronDown } from 'lucide-react'


// const Hero = () => {

//     const [isVisible, setIsVisible] = useState(false);
//     useEffect(() => {
//         setIsVisible(true);
//     }, []);

//     return (
//         <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" role='banner'>
//              {/* Animated Background Elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
//                 <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
//             </div>
//             <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//                 <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//                     Hey, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Kevin Newton</span>
//                 </h1>
//                 <p className="text-base md:text-lg text-gray-400 dark:text-gray-300 mb-4 italic">
//                     Turning complex challenges into elegant, user-focused solutions.
//                 </p>
//                 <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl">
//                     I build high-performance web applications with React and Node.js, delivering seamless user experiences for startups and enterprises.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <Button 
//                         onClick={() => scrollToSection('projects')}
//                         className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
//                         aria-label="View Kevin's projects"
//                     >
//                         Explore my Projects
//                     </Button>
//                     <Button 
//                         onClick={() => scrollToSection('contact')}
//                         variant="outline" 
//                         className="border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg transition-all duration-300"
//                         aria-label="Contact Kevin"
//                     >
//                         Hire Me Today
//                     </Button>
//                 </div>
//             </div>

//             {/* Scroll Indicator */}
//             <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//                 <ChevronDown className="w-6 h-6 text-gray-400" />
//             </div>
//         </section>
//     )
// }

// export default Hero

'use client'
import React, { useEffect, useState } from 'react'
import Button from './ui/button'
import { scrollToSection } from '@/lib/scroll'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gray-100 dark:bg-gray-900" role="banner" aria-label="Hero section">
            <div className="absolute inset-0 overflow-hidden">
                {/* Light Mode Background */}
                <div className="block dark:hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-blue rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
                </div>
                {/* Dark Mode Background */}
                <div className="hidden dark:block">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 dark:bg-teal-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                </div>
            </div>
            <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                    Hey, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300">Kevin Newton</span>
                </h1>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 italic">
                    Turning complex challenges into elegant, user-focused solutions.
                </p>
                <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl">
                    I build high-performance web applications with React and Node.js, delivering seamless user experiences for startups and enterprises.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                        onClick={() => scrollToSection('projects')}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
                        aria-label="View Kevin's projects"
                    >
                        Explore My Projects
                    </Button>
                    <Button 
                        onClick={() => scrollToSection('contact')}
                        variant="outline" 
                        className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200 px-8 py-3 text-lg transition-all duration-300"
                        aria-label="Contact Kevin"
                    >
                        Hire Me Today
                    </Button>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-300" />
            </div>
        </section>
    )
}

export default Hero