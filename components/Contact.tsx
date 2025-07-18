'use client'
import React from 'react'
import Button from './ui/button'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Contact = () => {
    return (
        <section 
            id="contact" 
            className="py-20 px-4 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-800 dark:to-gray-900" 
            aria-labelledby="contact-heading"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white dark:text-gray-100 mb-4">Collaborate on Your Next Project</h2>
                <p className="text-lg md:text-xl text-gray-300 dark:text-gray-200 mb-12">
                    Ready to build a high-performance web app or solve a complex technical challenge? Let&apos;s connect and bring your vision to life.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-left text-gray-900 dark:text-gray-100 mb-6">Get in Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-200" />
                                <div className='text-left'>
                                    <a 
                                        href="mailto:dev.kisibokevin@gmail.com" 
                                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                    >
                                        dev.kisibokevin@gmail.com
                                    </a>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">For project inquiries or collaboration</p>
                                </div>
                            </div>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <a 
                                    href="https://github.com/yourusername" 
                                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                                    aria-label="Visit Kevin's GitHub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-200" />
                                </a>
                                <a 
                                    href="https://linkedin.com/in/yourusername" 
                                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                                    aria-label="Visit Kevin's LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-200" />
                                </a>
                                <a 
                                    href="https://twitter.com/yourusername" 
                                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                                    aria-label="Visit Kevin's Twitter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-200" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800/70 p-6 rounded-xl order-last shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Send a Message</h3>
                        <form className="space-y-4" role="form" aria-label="Contact Kevin">
                            <div className='text-left'>
                                <label htmlFor="name" className="text-sm text-gray-700 dark:text-gray-200">Your Name</label>
                                <input 
                                    id="name"
                                    type="text" 
                                    placeholder="Enter your name" 
                                    className="w-full p-3 bg-gray-100 dark:bg-gray-600 rounded-lg text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                                />
                            </div>
                            <div className='text-left'>
                                <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200">Your Email</label>
                                <input 
                                    id="email"
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full p-3 bg-gray-100 dark:bg-gray-600 rounded-lg text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                                />
                            </div>
                            <div className='text-left'>
                                <label htmlFor="message" className="text-sm text-gray-700 dark:text-gray-200">Your Message</label>
                                <textarea 
                                    id="message"
                                    placeholder="How can I help you with your project?" 
                                    rows={4}
                                    className="w-full p-3 bg-gray-100 dark:bg-gray-600 rounded-lg text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                                ></textarea>
                            </div>
                            <Button 
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white dark:text-gray-100 py-3"
                                aria-label="Send message to Kevin"
                            >
                                Start a Collaboration
                            </Button>
                        </form>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default Contact