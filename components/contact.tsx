"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" ref={ref} className="py-16 lg:px-80 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-primary font-mono mb-2">04. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>

        <p className="text-muted-foreground mb-8">
          I'm currently looking for new opportunities in full-stack web development. Whether you have a question or just
          want to say hi, I'll do my best to get back to you!
        </p>

        <Button asChild variant="outline" className="border-primary text-primary font-mono font-semibold hover:bg-primary/10">
          <a href="mailto:harshbhorwork@gmail.com">Say Hello</a>
        </Button>
      </motion.div>
    </section>
  )
}
