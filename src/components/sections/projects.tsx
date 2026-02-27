"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Enterprise Dashboard System",
    description: "The Trusted B2B Platform for Medical Equipment Procurement in Africa.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
    demo: "#",
    repo: "#",
    challenge: "Scarsity of big medical equipment and means to get them",
    solution: "By connecting healthcare providers directly with manufacturers and distributors, we eliminate intermediaries, reduce costs, and ensure timely access to essential medical equipment."
  },
  {
    title: "EdTech Platform for Schools",
    description: "Modern learning management system that bridges the gap in Africa's education system by providing innovative, accessible, and impactful tech solutions.",
    tags: ["React", "Next.js", "TailwindCSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    demo: "#",
    repo: "#",
    challenge: "Low-knowledge of students on tech skills and lack of access to quality education.",
    solution: "By equipping students, educators, and institutions with the skills, tools, and resources needed to thrive in the digital age."
  },
  {
    title: "E-Commerce Design System",
    description: "A standalone component library used across 5+ diverse e-commerce storefronts to ensure brand consistency and accessibility.",
    tags: ["Storybook", "Radix UI", "TailwindCSS", "NPM Package"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    demo: "#",
    repo: "#",
    challenge: "Maintaining consistent theming across different brands.",
    solution: "Built a token-based theming engine using CSS variables."
  }
]

export function Projects() {
  return (
    <Section id="projects">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-4 max-w-2xl">
             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Work</h2>
             <p className="text-muted-foreground text-lg">
               Selected case studies demonstrating system architecture and UI engineering capabilities.
             </p>
          </div>
          <Button variant="outline" asChild>
             <Link href="https://github.com/otortimothy" target="_blank">
               View All GitHub <Github className="ml-2 h-4 w-4"/>
             </Link>
          </Button>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.5, delay: index * 0.2 }}
               className="group grid gap-8 md:grid-cols-2 items-center"
             >
                {/* Image Side */}
                <div className={`relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-muted ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                   <Image
                     src={project.image}
                     alt={project.title}
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                   {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <Button variant="secondary" size="sm" asChild>
                        <Link href={project.demo}>Live Demo <ExternalLink className="ml-2 h-4 w-4"/></Link>
                      </Button>
                      <Button variant="secondary" size="sm" asChild>
                        <Link href={project.repo}>Code <Github className="ml-2 h-4 w-4"/></Link>
                      </Button>
                   </div> */}
                </div>

                {/* Content Side */}
                <div className="space-y-6">
                   <div className="space-y-2">
                     <h3 className="text-2xl font-bold">{project.title}</h3>
                     <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                   </div>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-secondary/10 p-4 rounded-lg border border-white/5">
                      <div>
                        <span className="block font-semibold text-primary mb-1">The Challenge</span>
                        <span className="text-muted-foreground">{project.challenge}</span>
                      </div>
                       <div>
                        <span className="block font-semibold text-primary mb-1">The Solution</span>
                        <span className="text-muted-foreground">{project.solution}</span>
                      </div>
                   </div>

                   <div className="flex flex-wrap gap-2">
                     {project.tags.map(tag => (
                       <Badge key={tag} variant="outline" className="border-primary/20 text-primary">{tag}</Badge>
                     ))}
                   </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
