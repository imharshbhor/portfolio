"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const skills = [
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "Docker",
        "Azure",
        "Firebase",
        "Tailwind CSS",
    ]

    return (
        <section id="about" ref={ref} className="py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h2 className="text-2xl font-bold flex items-center">
                    <span className="text-primary font-mono mr-2">01.</span>
                    <span>About Me</span>
                    <span className="h-px bg-muted flex-grow ml-4"></span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="md:col-span-3 text-muted-foreground"
                >
                    <p className="mb-4">
                        Hi, I'm Harsh — a frontend developer who crafts clean, responsive UIs with React and Next.js. I care about performance, accessibility, and the small UX details that make apps feel smooth.
                    </p>

                    {/* {/* <p className="mb-4">
            I'm proficient in JavaScript/TypeScript frameworks including Node.js, React.js, and Next.js. I have
            experience developing web applications and working with cloud services such as AWS EC2, Azure VM, and
            Firebase.
          </p> */}

                    <p className="mb-6">
                        I'm open to remote roles and freelance projects. Let's build something great together!
                    </p>
                    <p className="mb-6">Here are a few technologies I've been working with recently:</p>

                    <ul className="grid grid-cols-2 gap-2">
                        {skills.map((skill, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-primary mr-2">▹</span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:col-span-2 relative"
                >
                    <div className="relative group mt-6">
                        <div className="absolute inset-0 bg-primary/20 rounded-md transition-all duration-300 group-hover:bg-transparent"></div>
                        <div className="absolute inset-0 border-2 border-primary rounded-md transform translate-x-4 translate-y-4 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <Image
                            src="/me.jpg"
                            alt="Profile"
                            width={400}
                            height={400}
                            quality={100}
                            className="rounded-md relative z-10"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
