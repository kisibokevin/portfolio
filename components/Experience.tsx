import React from 'react'

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
                    <p className="text-xl text-gray-600">My professional journey and achievements</p>
                </div>

                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
                        <div className="md:w-1/4">
                            <span className="text-sm font-medium text-purple-600">2021 - Present</span>
                        </div>
                        <div className="md:w-3/4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Frontend Developer</h3>
                            <p className="text-purple-600 mb-3">TechCorp Solutions</p>
                            <p className="text-gray-600">
                            Led a team of 4 developers in building responsive web applications using React and TypeScript. 
                            Improved application performance by 40% and mentored junior developers.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
                        <div className="md:w-1/4">
                            <span className="text-sm font-medium text-purple-600">2019 - 2021</span>
                        </div>
                        <div className="md:w-3/4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Stack Developer</h3>
                            <p className="text-purple-600 mb-3">StartupXYZ</p>
                            <p className="text-gray-600">
                            Developed and maintained multiple client projects using React, Node.js, and MongoDB. 
                            Collaborated closely with designers and product managers to deliver high-quality solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience