import React from 'react'
import { Briefcase, Mail } from 'lucide-react'
import Button from './ui/button'

const experiences = [
    {
        id: 1,
        period: "2021 - Present",
        title: "Senior Frontend Developer",
        company: "TechCorp Solutions",
        description: "Led a team of 4 developers to build responsive React and TypeScript applications, reducing page load times by 40% and increasing user retention by 25%.",
        responsibilities: ["Team Leadership", "Performance Optimization", "Mentoring"]
    },
    {
        id: 2,
        period: "2019 - 2021",
        title: "Full Stack Developer",
        company: "StartupXYZ",
        description: "Developed 5+ client projects using React, Node.js, and MongoDB, achieving 98% client satisfaction.",
        responsibilities: ["Full-Stack Development", "Client Collaboration", "CI/CD Implementation"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900" aria-labelledby="experience-heading">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 id="experience-heading" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Experience</h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">My professional journey and achievements</p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp) => (
                        <div 
                            key={exp.id}
                            className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow duration-300"
                            tabIndex={0}
                            role="article"
                            aria-label={`Experience: ${exp.title} at ${exp.company}`}
                        >
                            <div className="md:w-1/4 flex items-start gap-2">
                                <Briefcase className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{exp.period}</span>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{exp.title}</h3>
                                <p className="text-purple-600 dark:text-purple-400 mb-2">{exp.company}</p>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.description}</p>
                                <ul className="text-sm text-gray-500 dark:text-gray-400 list-disc list-inside">
                                    {exp.responsibilities?.map((resp) => (
                                        <li key={resp}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button asChild variant="default">
                        <a href="#contact" className="flex items-center gap-2 dark:text-gray-100">
                            <Mail className="w-4 h-4" />
                            Discuss a Project
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Experience)