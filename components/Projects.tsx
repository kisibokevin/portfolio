import Image from 'next/image'
import React from 'react'
import Button from './ui/button'
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Built a full-stack e-commerce platform  processing 10,000+ transactions monthly with a 99.9% uptime.",
        role: "Lead Developer",
        features: ["User Authentication", "Payment Integration", "Admin Dashboard"],        
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Collaborative project management tool.",
        role: "Lead Developer",
        features: ["Real-time updates", "Drag-and-drop functionality", "Team collaboration"],
        technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Beautiful weather application with a user-friendly interface.",
        role: "Lead Developer",
        features: ["Location-based forecasts", "Interactive maps", "Detailed weather analytics"],
        technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Tailwind"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
        liveUrl: "#",
        githubUrl: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900" aria-labelledby="projects-heading">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 id="projects-heading" className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Featured Projects</h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                        Here are some of my recent projects that showcase my skills and creativity
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card 
                            key={project.id} 
                            className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
                            tabIndex={0}
                            role="article"
                            aria-label={`Project: ${project.title}`}
                        >
                            <div className="relative overflow-hidden">
                                <Image 
                                    src={project.image} 
                                    alt={project.title}
                                    width={600}
                                    height={192}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                        <Button 
                                            asChild 
                                            size="sm" 
                                            className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                                        >
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                                                <ExternalLink className="w-4 h-4 mr-1 text-gray-900 dark:text-gray-200" />
                                                View Project
                                            </a>
                                        </Button>
                                        <Button 
                                            asChild 
                                            size="sm" 
                                            variant="outline" 
                                            className="border-white dark:border-gray-600 text-white dark:text-gray-200 hover:bg-white dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-gray-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                                        >
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View source code of ${project.title}`}>
                                                <Github className="w-4 h-4 mr-1 text-white dark:text-gray-200" />
                                                Code
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Role: {project.role}</p>
                                <p className="text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{project.description}</p>
                                <ul className="text-sm text-gray-500 dark:text-gray-400 mb-4 list-disc list-inside">
                                    {project.features?.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button asChild variant="default">
                        <a href="/projects" className="flex items-center gap-2 dark:text-gray-100">
                            <ExternalLink className="w-4 h-4" />
                            Explore All My Projects
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Projects)