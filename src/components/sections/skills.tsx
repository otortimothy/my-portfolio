"use client"

import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const skills = {
  "Frontend Core": ["React ", "TypeScript", "Next.js", "TailwindCSS ", "Html5", "CSS3"],
  // "State & Data": ["Redux Toolkit", "TanStack Query", "Zustand", "Context API", "Server Actions"],
  // "Testing & QA": ["Jest", "React Testing Library", "Playwright", "Cypress", "Storybook"],
  // "Infrastructure": ["Docker", "AWS (S3, CloudFront)", "Vercel", "GitHub Actions", "Turborepo"],
  "Design & Animation": ["Figma", "Framer Motion", "Radix UI", "Shadcn UI"]
}

export function Skills() {
  return (
    <Section id="skills" className="bg-secondary/20">
      <div className="flex flex-col gap-12">
        <div className="space-y-4 max-w-2xl">
           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient-primary inline-block">Technical Arsenal</h2>
           <p className="text-muted-foreground text-lg">
             A comprehensive toolkit designed for building scalable, high-performance web applications.
             I focus on modern standards and type-safety.
           </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/5 p-6 hover:border-indigo-500/30 transition-colors"
            >
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="mb-4 text-lg font-semibold text-foreground relative z-10">{category}</h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-background/50 backdrop-blur-sm border-white/5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
