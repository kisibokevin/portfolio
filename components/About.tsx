import { Code, Globe, Palette, Braces, FileCode, Database, Code2, GitBranch, Mail } from 'lucide-react'
import React from 'react'
import Button from './ui/button'

const skills = [
    { name: 'JavaScript', icon: <Braces className="w-6 h-6 text-yellow-500 dark:text-yellow-400" /> },
    { name: 'React', icon: <FileCode className="w-6 h-6 text-blue-500 dark:text-blue-400" /> },
    { name: 'TypeScript', icon: <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-300" /> },
    { name: 'Node.js', icon: <Code className="w-6 h-6 text-green-500 dark:text-green-400" /> },
    { name: 'Python', icon: <Code2 className="w-6 h-6 text-blue-700 dark:text-blue-300" /> },
    { name: 'HTML/CSS', icon: <Palette className="w-6 h-6 text-purple-500 dark:text-purple-400" /> },
    { name: 'MongoDB', icon: <Database className="w-6 h-6 text-green-600 dark:text-green-500" /> },
    { name: 'Git', icon: <GitBranch className="w-6 h-6 text-orange-500 dark:text-orange-400" /> }
];

const About = () => {
    return (
        <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900" aria-labelledby="about-heading">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 id="about-heading" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">About Me</h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        I &apos;m a full-stack developer with over 5 years of experience, delivering scalable web applications that 
                        drive user engagement and business growth. My expertise in React and Node.js has helped startups and 
                        enterprises reduce load times by up to 40% and enhance user satisfaction.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">My Expertise</h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            I specialize in crafting seamless user experiences with React and TypeScript, backed by 
                            robust Node.js and MongoDB architectures. For example, I led the development of an e-commerce 
                            platform that processed over 10,000 transactions monthly, ensuring 99.9% uptime and intuitive UI.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2">
                                <Code className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                                <span className="text-gray-700 dark:text-gray-200">Clean Code</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Palette className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                                <span className="text-gray-700 dark:text-gray-200">UI/UX Design</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-5 h-5 text-green-500 dark:text-green-400" />
                                <span className="text-gray-700 dark:text-gray-200">Web Performance</span>
                            </div>
                        </div>
                        <Button asChild variant="default" className="mt-4">
                            <a href="#contact" className="flex items-center gap-2 dark:text-gray-100">
                                <Mail className="w-4 h-4" />
                                Hire Me for Your Next Project
                            </a>
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100 col-span-full">Front-End</h5>
                        {skills.filter(s => ['JavaScript', 'React', 'TypeScript', 'HTML/CSS'].includes(s.name)).map((skill) => (
                            <div 
                                key={skill.name}
                                className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow duration-300"
                                tabIndex={0}
                                role="button"
                                aria-label={`Skill: ${skill.name}`}
                                title={`Proficient in ${skill.name} for building responsive and interactive UIs`}
                            >
                                {skill.icon}
                                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                            </div>
                        ))}
                        <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100 col-span-full mt-4">Back-End & Tools</h5>
                        {skills.filter(s => !['JavaScript', 'React', 'TypeScript', 'HTML/CSS'].includes(s.name)).map((skill) => (
                            <div 
                                key={skill.name}
                                className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow duration-300"
                                tabIndex={0}
                                role="button"
                                aria-label={`Skill: ${skill.name}`}
                                title={`Experienced in ${skill.name} for scalable backend solutions and version control`}
                            >
                                {skill.icon}
                                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(About)