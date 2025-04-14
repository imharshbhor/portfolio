"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface Job {
  title: string
  company: string
  companyUrl: string
  date: string
  description: string[]
  technologies: string[]
}

const jobs: Job[] = [
  {
    title: "Developer",
    company: "Karnataka Digital Economy Mission (KDEM)",
    companyUrl: "https://karnatakadigital.in/",
    date: "July 2024 - Present",
    description: [
      "Developed an admin panel for the Karnataka Digital Economy Mission (KDEM) to manage the incubation process.",
      "Contributing to the Karnataka Startup Ecosystem Impact Management Portal to measure the impact of Innovation Hubs supported by KDEM.",
      "Implementing features to track and visualize startup ecosystem metrics.",
    ],
    technologies: ["Vue.js", "Node.js", "Azure", "Firebase", "MongoDB"],
  },
  {
    title: "Developer Trainee",
    company: "GlobeTX",
    companyUrl: "https://globetx.com/",
    date: "October 2023 - March 2024",
    description: [
      "Developed a comprehensive dashboard for ICAP using Node.js and React.js, integrating real-time mutual fund data from the AMFI website.",
      "Created an interactive medical admin panel for Manipur State, processing data from a medical device API and visualizing interactive patient information.",
      "Gained proficiency in Node.js, React.js, Next.js, and AWS EC2 instances through hands-on project work.",
    ],
    technologies: ["React.js", "Node.js", "Next.js", "AWS EC2", "MongoDB"],
  },
]

export function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="work" ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold flex items-center">
          <span className="text-primary font-mono mr-2">02.</span>
          <span>Where I've Worked</span>
          <span className="h-px bg-muted flex-grow ml-4"></span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="py-4"
          >
            <h3 className="text-xl font-medium mb-1">
              {job.title} <span className="text-primary">@ </span>
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {job.company}
              </a>
            </h3>

            <p className="text-sm text-muted-foreground font-mono mb-4">{job.date}</p>

            <ul className="space-y-2 text-muted-foreground">
              {job.description.map((item, index) => (
                <li key={index} className="flex max-w-2xl">
                  <span className="text-primary mr-2 flex-shrink-0">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.technologies.map((tech, index) => (
                <span key={index} className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
