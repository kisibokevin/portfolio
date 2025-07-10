import Image from 'next/image'
import React from 'react'
import Button from './ui/button'
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
            technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
            technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Tailwind"],
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
            liveUrl: "#",
            githubUrl: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <p className="text-xl text-gray-600">
                        Here are some of my recent projects that showcase my skills and creativity
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card 
                            key={project.id} 
                            className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="relative overflow-hidden">
                                <Image 
                                    src={project.image} 
                                    alt={project.title}
                                    width={600}
                                    height={192}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                        <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            Live Demo
                                        </Button>
                                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                                            <Github className="w-4 h-4 mr-1" />
                                            Code
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects