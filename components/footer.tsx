import { Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© 2025 Rithika Vennamaneni. All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/vennamaneni-rithika-546a1b203"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-secondary hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-secondary hover:text-primary transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
