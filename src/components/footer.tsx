"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/shinezaya",
    color: "hover:text-gray-600"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/shinezaya",
    color: "hover:text-blue-600"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/shinezaya",
    color: "hover:text-blue-400"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/shinezaya",
    color: "hover:text-pink-500"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@shinezaya.com",
    color: "hover:text-red-500"
  }
]

const quickLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.portfolio", href: "#portfolio" },
  { key: "nav.contact", href: "#contact" }
]

export function Footer() {
  const { t } = useI18n()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
              Shinezaya
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t("footer.brand.desc")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>hello@shinezaya.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground">
            © <span suppressHydrationWarning>{typeof window !== "undefined" ? new Date().getFullYear() : ""}</span> Shinezaya Myagmar. {t("footer.rights")}
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            {t("footer.madeWith")}
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 