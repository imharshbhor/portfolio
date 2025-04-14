import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Work } from "@/components/work"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MouseGlow } from "@/components/mouse-glow"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <MouseGlow />
      <Header />
      <main>
        <div className="container mx-auto px-8 sm:px-6 lg:px-40 py-24 space-y-28">
        <Hero />
        <About />
        <Work />
        </div>
        <div className="container mx-auto px-6 sm:px-6 lg:px-28 space-y-20">
        <Projects />
        <Contact />
        </div>
      </main>
      <Footer />
      <div className="hidden md:flex fixed bottom-0 left-[4rem] flex-col items-center space-y-4">
        <a href="https://github.com/imharshbhor" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-muted-foreground hover:text-foreground transition-colors text-xl" />
        </a>
        <a href="https://linkedin.com/in/harshvardhan-bhor-9a5303360" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-muted-foreground hover:text-foreground transition-colors text-xl" />
        </a>
        <div className="w-px h-24 bg-muted-foreground"></div>
      </div>
      <div className="hidden md:flex fixed bottom-0 right-[-1rem] flex-col items-center space-y-[6.4rem]">
        <a href="mailto:harshbhorwork@gmail.com" className="rotate-90 text-muted-foreground hover:text-foreground transition-colors">
          <span className="">harshbhorwork@gmail.com</span>
        </a>
        <div className="w-px h-24 bg-muted-foreground"></div>
      </div>
    </div>
  )
}
