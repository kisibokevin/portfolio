import { Code, Globe, Palette } from 'lucide-react'
import React from 'react'

const About = () => {
    const skills = [
        { name: 'JavaScript', icon: '🟨' },
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python', icon: '🐍' },
        { name: 'HTML/CSS', icon: '🎨' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Git', icon: '📚' }
    ];
    
    return (
        <section id="about" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    I&apos;m a passionate full-stack developer with 5+ years of experience building scalable web applications. 
                    I love turning complex problems into simple, beautiful designs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Expertise</h3>
                        <p className="text-gray-600 leading-relaxed">
                            With a strong foundation in both front-end and back-end technologies, I specialize in creating 
                            seamless user experiences backed by robust server architectures. I&apos;m particularly passionate 
                            about React, Node.js, and modern web technologies.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Code className="w-5 h-5 text-blue-500" />
                                <span className="text-gray-700">Clean Code</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Palette className="w-5 h-5 text-purple-500" />
                                <span className="text-gray-700">UI/UX Design</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700">Web Performance</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h4 className="text-xl font-semibold text-gray-900 mb-6">Skills & Technologies</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                            <div 
                                key={skill.name}
                                className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <span className="text-2xl">{skill.icon}</span>
                                <span className="font-medium text-gray-800">{skill.name}</span>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About