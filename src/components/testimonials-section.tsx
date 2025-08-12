"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"
import { useI18n } from "@/lib/i18n"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Shinezaya transformed our app&apos;s user experience completely. Her attention to detail and user-centered approach resulted in a 40% increase in user engagement. She&apos;s not just a designer, she&apos;s a problem solver.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    content: "Working with Shinezaya was a game-changer for our startup. Her designs are not only beautiful but also highly functional. She understood our vision perfectly and delivered beyond our expectations.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GlobalBrand",
    content: "Shinezaya&apos;s design work helped us establish a strong brand identity. Her creative solutions and professional approach made the entire process smooth and enjoyable. Highly recommended!",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO",
    company: "InnovateLab",
    content: "The dashboard Shinezaya designed for us is intuitive and powerful. Her understanding of both user needs and technical constraints is impressive. She&apos;s definitely our go-to designer for future projects.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "UX Lead",
    company: "DesignStudio",
    content: "Shinezaya brings a unique perspective to every project. Her designs are innovative yet practical, and she always puts the user first. It&apos;s been a pleasure collaborating with her.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useI18n()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const title = t("testimonials.title")
  const [first, ...rest] = title.split(" ")

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {first} {rest.length > 0 ? <span className="text-primary">{rest.join(" ")}</span> : null}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Quote className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-background transition-all duration-300 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-background transition-all duration-300 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-lg font-medium">{t("ui.clientSatisfaction")}</div>
            <p className="text-muted-foreground">
              {t("testimonials.stats.client.desc")}
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-primary">15+</div>
            <div className="text-lg font-medium">{t("ui.happyClients")}</div>
            <p className="text-muted-foreground">
              {t("testimonials.stats.clients.desc")}
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-primary">5.0</div>
            <div className="text-lg font-medium">{t("ui.averageRating")}</div>
            <p className="text-muted-foreground">
              {t("testimonials.stats.rating.desc")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}