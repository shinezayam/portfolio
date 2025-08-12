"use client"

import { motion } from "framer-motion"
import {
  Palette,
  Users,
  Lightbulb,
  Target,
  Zap,
  Heart,
  Smartphone,
  Monitor,
  Layers,
  PenTool
} from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

const skills = [
  { name: "Figma", icon: PenTool, color: "text-purple-500" },
  { name: "Adobe XD", icon: Monitor, color: "text-blue-500" },
  { name: "Sketch", icon: Layers, color: "text-yellow-500" },
  { name: "Prototyping", icon: Smartphone, color: "text-green-500" },
  { name: "Visual Design", icon: Palette, color: "text-pink-500" },
  { name: "User Research", icon: Users, color: "text-indigo-500" },
]

const philosophies = [
  {
    icon: Heart,
    titleKey: "about.philosophy.user",
    descriptionKey: "about.philosophy.user.desc",
  },
  {
    icon: Lightbulb,
    titleKey: "about.philosophy.innovative",
    descriptionKey: "about.philosophy.innovative.desc",
  },
  {
    icon: Target,
    titleKey: "about.philosophy.purposeful",
    descriptionKey: "about.philosophy.purposeful.desc",
  },
  {
    icon: Zap,
    titleKey: "about.philosophy.efficient",
    descriptionKey: "about.philosophy.efficient.desc",
  },
]

export function AboutSection() {
  const { t } = useI18n()
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("about.heading").split(" ")[0]} <span className="text-primary">{t("about.heading").split(" ")[1]}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
              <Image
              src="/Photos/My_profile_picture.jpg"
              alt="Shinezaya Myagmar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold mb-6">{t("about.story.title")}</h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                {t("about.story.p1")}
              </p>
              <p>
                {t("about.story.p2")}
              </p>
              <p>
                {t("about.story.p3")}
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold mb-6">{t("about.skills.title")}</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <skill.icon className={`h-6 w-6 ${skill.color}`} />
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Design Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-semibold mb-12">{t("about.philosophy.title")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophies.map((philosophy, index) => (
              <motion.div
                key={philosophy.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <philosophy.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">{t(philosophy.titleKey)}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t(philosophy.descriptionKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold mb-4">{t("about.exp.title")}</h3>
            <p className="text-lg text-muted-foreground">
              Key achievements and milestones in my design journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-lg font-medium">{t("ui.projectsCompleted")}</div>
              <p className="text-muted-foreground">
                {t("about.exp.projects.desc")}
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-lg font-medium">{t("ui.happyClients")}</div>
              <p className="text-muted-foreground">
                {t("about.exp.clients.desc")}
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-primary">3+</div>
              <div className="text-lg font-medium">{t("ui.yearsExperience")}</div>
              <p className="text-muted-foreground">
                {t("about.exp.years.desc")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 