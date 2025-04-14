import { Github, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-4 space-y-2">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>8856998011</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span>harshbhorwork@gmail.com</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>Sadashiv Peth, Pune, Maharashtra</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <Button asChild variant="ghost" size="icon">
            <a href="https://github.com/imharshbhor" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://linkedin.com/in/harshvardhan-bhor-9a5303360" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <p className="text-sm font-mono">Designed & Built by Harsh Bhor.</p>
      </div>
    </footer>
  )
}
