import Link from "next/link"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Built with Next.js 15, Tailwind v4, and framer-motion.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="h-5 w-5" />
            <span className="sr-only">Whatsapp</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
