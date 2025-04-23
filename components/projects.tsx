"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    githubUrl: string
    liveUrl: string
    featured: boolean
}

const projects: Project[] = [
    {
        title: "KDEM Centres of Excellence Dashboard",
        description:
            "An admin panel developed for the Karnataka Digital Economy Mission (KDEM) to manage the incubation process. Implementing features using Vue.js, Node.js, Azure, and Firebase to track and visualize startup ecosystem metrics.",
        image: "/KDEM/1.png",
        technologies: ["Vue.js", "Node.js", "Azure", "Firebase", "MongoDB"],
        githubUrl: "https://github.com",
        liveUrl: "https://kdem-b32a7.web.app/",
        featured: true,
    },
    {
        title: "HealthTrack",
        description:
            "A medical dashboard created using Next.js to display patient data fetched from a VoCare device API. Implemented real-time data updates and filtering capabilities for efficient information access.",
        image: "/HealthTrack/1.png",
        technologies: ["Next.js", "Node.js", "REST API", "MongoDB"],
        githubUrl: "https://github.com",
        liveUrl: "https://health-track-demo.vercel.app/",
        featured: true,
    },
    {
        title: "Jobsy",
        description:
            "Jobsy is a job application tracker that provides users with analytics and insights based on their job data to optimize their job search. It also features a chatbot to assist users in their job hunting journey.",
        image: "/Jobsy/1.png",
        technologies: ["Next.js", "Postgres", "Supabase", "OpenAI"],
        githubUrl: "https://github.com",
        liveUrl: "https://jobsy-hazel.vercel.app/",
        featured: true,
    },
]

export function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="projects" ref={ref} className="py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-2xl font-bold flex items-center">
                    <span className="text-primary font-mono mr-2">03.</span>
                    <span>Some Things I've Built</span>
                    <span className="h-px bg-muted flex-grow ml-4"></span>
                </h2>
            </motion.div>

            <div className="space-y-24">
                {projects
                    .filter((p) => p.featured)
                    .map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div
                                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                            >
                                {/* Project Image */}
                                <div className="w-full md:w-1/2">
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block relative group">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            width={800}
                                            height={500}
                                            className="rounded-md shadow-md w-full h-auto hover:scale-105 transition-all duration-300"
                                        />
                                    </a>
                                </div>

                                {/* Project Content */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                                    <p className="text-primary font-mono mb-1">Featured Project</p>
                                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                                    <div className="py-4 rounded-md mb-4">
                                        <p className="text-muted-foreground">{project.description}</p>
                                    </div>

                                    <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? "md:justify-start" : ""}`}>
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                                        {/* <Button asChild variant="ghost" size="icon">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button> */}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </section>
    )
}
