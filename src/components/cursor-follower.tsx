"use client"

import { useEffect, useRef } from "react"

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let ringX = window.innerWidth / 2
    let ringY = window.innerHeight / 2

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      dot.style.transform = `translate(${clientX}px, ${clientY}px)`
    }

    const updateRing = () => {
      const dotTransform = dot.style.transform
      const match = /translate\((\d+)px,\s*(\d+)px\)/.exec(dotTransform)
      if (match) {
        const targetX = parseFloat(match[1])
        const targetY = parseFloat(match[2])
        ringX += (targetX - ringX) * 0.12
        ringY += (targetY - ringY) * 0.12
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      requestAnimationFrame(updateRing)
    }

    window.addEventListener("mousemove", handleMouseMove)
    requestAnimationFrame(updateRing)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[70]">
      <div ref={ringRef} className="absolute -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/10 border border-primary/30" />
      <div ref={dotRef} className="absolute -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-primary" />
    </div>
  )
} 