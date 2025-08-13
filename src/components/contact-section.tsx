"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useI18n()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const fireConfetti = async () => {
    const mod = await import("canvas-confetti")
    const confetti = mod.default

    const end = Date.now() + 1200
    const colors = ["#a78bfa", "#f472b6", "#60a5fa", "#facc15"]

    const frame = () => {
      confetti({
        particleCount: 60,
        startVelocity: 35,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors,
        zIndex: 9999,
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      fireConfetti().catch(() => {})
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (err) {
      console.error('Failed to submit contact form', err)
      // Optionally: show a toast/error state
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      titleKey: "contact.info.email",
      value: "shinezayam@gmail.com",
      href: "mailto:shinezayam@gmail.com"
    },
    {
      icon: Phone,
      titleKey: "contact.info.phone",
      value: "+976 88019223",
      href: "tel:+97688019223"
    },
    {
      icon: MapPin,
      titleKey: "contact.info.location",
      value: "Ulaanbaatar, Mongolia",
      href: "#"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("contact.title").split(" ")[0]} <span className="text-primary">{t("contact.title").split(" ")[1]}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">{t("contact.getInTouch")}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t("contact.getInTouch.desc")}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.titleKey}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t(info.titleKey)}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
              <h4 className="font-semibold text-lg mb-3">{t("contact.offer.title")}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t("contact.offer.uiux")}</li>
                <li>• {t("contact.offer.research")}</li>
                <li>• {t("contact.offer.proto")}</li>
                <li>• {t("contact.offer.systems")}</li>
                <li>• {t("contact.offer.consult")}</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">{t("contact.form.sendMessage")}</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-10 text-center shadow-xl"
              >
                <div className="pointer-events-none absolute -inset-16 opacity-30 blur-3xl bg-gradient-to-tr from-primary/20 to-secondary/20" />

                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.05 }} className="relative mx-auto mb-6 grid place-items-center">
                  <div className="absolute h-20 w-20 rounded-full bg-green-400/20 animate-ping" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-green-400/40 bg-gradient-to-br from-green-400/20 to-emerald-500/20">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                </motion.div>

                <h4 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t("contact.form.sent.title")}
                </h4>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {t("contact.form.sent.subtitle")}
                </p>

                <div className="mt-6">
                  <Button onClick={() => setIsSubmitted(false)} className="bg-gradient-to-r from-primary to-secondary text-white">
                    {t("contact.form.send")}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    placeholder={t("contact.form.name.ph")}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    placeholder={t("contact.form.email.ph")}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                    placeholder={t("contact.form.message.ph")}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{t("contact.form.sending")}</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-5 w-5" />
                      <span>{t("contact.form.send")}</span>
                    </div>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 