"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { useEffect } from "react"

export function InteractiveBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const shadow1 = useMotionTemplate`translateX(${mouseX.get() * 0.02}px) translateY(${mouseY.get() * 0.02}px)`
  const shadow2 = useMotionTemplate`translateX(${mouseX.get() * -0.02}px) translateY(${mouseY.get() * -0.02}px)`

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ transform: shadow1 as any }}
        className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-30 bg-gradient-to-br from-primary to-secondary"
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        style={{ transform: shadow2 as any }}
        className="absolute -bottom-24 -right-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-secondary to-primary"
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,theme(colors.foreground)_1px,transparent_0)] [background-size:24px_24px]" />
    </div>
  )
} 