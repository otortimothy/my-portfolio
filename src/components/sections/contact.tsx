"use client"

import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <Section id="contact" className="text-center relative overflow-hidden">
       {/* Decorative Background */}
       <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent to-indigo-500/10" />
       
       <div className="max-w-2xl mx-auto space-y-8 items-center justify-center py-20">
         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Scale Your Frontend?</h2>
         <p className="text-lg text-muted-foreground">
           I&apos;m currently available for freelance projects and senior engineering roles.
           If you need a specialist in React architecture and performance, let&apos;s talk.
         </p>
         
         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <Button size="lg" variant="premium" className="w-full sm:w-auto text-base h-12 gap-2" asChild>
             <Link href="mailto:[otortimothy7@gmail.com]">
               <Mail className="w-5 h-5"/>
               Start a Conversation
             </Link>
           </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto text-base h-12 gap-2" asChild>
             <Link href="https://linkedin.com/in/timothyotor"
              target="_blank">
               Connect on LinkedIn
               <ArrowRight className="w-5 h-5"/>
             </Link>
           </Button>
         </div>
       </div>
    </Section>
  )
}
