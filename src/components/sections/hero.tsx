"use client"

import Link from "next/link"
import { ArrowRight, Download, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <Section className=" flex flex-col justify-center min-h-[90vh]">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 py-10 ">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mx-auto"
        >
          <Terminal className="w-4 h-4" />
          <span>System-Oriented Frontend Engineer</span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground font-mono">
          Building <span className="text-gradient-primary">Scalable</span> <br className="hidden md:block" />
          Dashboard Interfaces.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I specialize in <strong>React (Next.js)</strong> ecosystem, architecting high-performance SaaS applications and design systems that scale.
          bridging the gap between complex backend logic and premium user experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" variant="premium" className="w-full sm:w-auto text-base h-12" asChild>
            <Link href="#projects">
              View Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 border-white/10 hover:bg-white/5" asChild>
            <Link href="Download Otor Timothy CV" target="_blank">
               Download CV
               <Download className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </Section>
  )
}
