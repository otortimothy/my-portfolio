"use client"

import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  delay?: number
}

export function Section({ children, className, containerClassName, delay = 0, ...props }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn("py-20 md:py-28 lg:py-32 relative overflow-hidden", className)}
      {...props}
    >
      <div className={cn("container mx-auto px-4 md:px-6 relative z-10", containerClassName)}>
        {children}
      </div>
    </motion.section>
  )
}
