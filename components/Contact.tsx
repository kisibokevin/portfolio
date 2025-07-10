import React from 'react'
import Button from './ui/button'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
                <p className="text-xl text-gray-300 mb-12">
                    I&apos;m always open to discussing new opportunities and interesting projects
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-left mb-6">Get in Touch</h3>
                        <div className="space-y-4">
                            <a 
                            href="mailto:alex.chen@example.com" 
                            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                            >
                            <Mail className="w-5 h-5" />
                                dev.kisibokevin@gmail.com
                            </a>
                            <div className="flex gap-4 justify-center md:justify-start">
                            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-4">Quick Message</h3>
                        <form className="space-y-4">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <textarea 
                                placeholder="Your Message" 
                                rows={4}
                                className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            ></textarea>
                            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact