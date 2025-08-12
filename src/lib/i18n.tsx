"use client"

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

export type SupportedLocale = "en" | "mn"

type Translations = Record<string, Record<SupportedLocale, string>>

type I18nContextValue = {
  locale: SupportedLocale
  setLocale: (locale: SupportedLocale) => void
  toggleLocale: () => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

const LOCAL_STORAGE_KEY = "locale"

const translations: Translations = {
  // Navigation
  "nav.home": { en: "Home", mn: "Нүүр" },
  "nav.about": { en: "About", mn: "Миний тухай" },
  "nav.portfolio": { en: "Portfolio", mn: "Портфолио" },
  "nav.testimonials": { en: "Testimonials", mn: "Сэтгэгдлүүд" },
  "nav.blog": { en: "Blog", mn: "Блог" },
  "nav.contact": { en: "Contact", mn: "Холбоо барих" },

  // Generic UI
  "ui.view": { en: "View", mn: "Харах" },
  "ui.live": { en: "Live", mn: "Шууд үзэх" },
  "ui.clientSatisfaction": { en: "Client Satisfaction", mn: "Захиалагчийн сэтгэл ханамж" },
  "ui.projectsCompleted": { en: "Projects Completed", mn: "Дуусгасан төслүүд" },
  "ui.yearsExperience": { en: "Years Experience", mn: "Ажлын жил" },
  "ui.happyClients": { en: "Happy Clients", mn: "Сэтгэл хангалуун захиалагчид" },
  "ui.averageRating": { en: "Average Rating", mn: "Дундаж үнэлгээ" },

  // Hero
  "hero.greeting": { en: "Hello, I'm", mn: "Сайн байна уу, би" },
  "hero.role": { en: "UI/UX Designer", mn: "UI/UX дизайнер" },
  "hero.tagline": { en: "Crafting beautiful, intuitive digital experiences that users love", mn: "Хэрэглэгчдэд таалагдах гоёмсог, ойлгомжтой дижитал туршлагыг бүтээдэг" },
  "hero.cta": { en: "View My Work", mn: "Миний бүтээлүүдийг үзэх" },
  "hero.scroll": { en: "Scroll to explore", mn: "Дэлгэрэнгүйг доош гүйлгэнэ үү" },

  // About
  "about.title": { en: "About", mn: "Миний тухай" },
  "about.heading": { en: "About Me", mn: "Миний тухай" },
  "about.subtitle": { en: "Passionate UI/UX designer with a love for creating meaningful digital experiences", mn: "Утга учиртай дижитал туршлага бүтээхэд дуртай, сэтгэлтэй UI/UX дизайнер" },
  "about.story.title": { en: "My Story", mn: "Миний түүх" },
  "about.story.p1": { en: "I'm Shinezaya Myagmar, a passionate UI/UX designer with over 3 years of experience creating digital experiences that users love. My journey began with a fascination for how people interact with technology and a desire to make those interactions more intuitive and enjoyable.", mn: "Би Shinezaya Myagmar. 3+ жилийн туршлагатай UI/UX дизайнер. Хүмүүс технологитой хэрхэн харилцдаг нь надад сонирхолтой санагдсанаар миний аялал эхэлсэн бөгөөд тэдгээр харилцааг илүү ойлгомжтой, таатай болгохыг зорьдог." },
  "about.story.p2": { en: "I believe that great design is invisible - it guides users seamlessly through their journey while solving real problems. Every project I work on is an opportunity to learn, grow, and create something meaningful.", mn: "Сайн дизайн үл анзаарагдам байх ёстой гэж би итгэдэг — энэ нь хэрэглэгчийг аяллын туршид саадгүй чиглүүлж, бодит асуудлыг шийддэг. Тухайн төсөл бүр нь суралцах, хөгжих, утга учиртай зүйл бүтээх боломж юм." },
  "about.story.p3": { en: "When I'm not designing, you can find me exploring new design trends, experimenting with new tools, or sharing knowledge with the design community.", mn: "Дизайн хийж байхгүй үед шинэ чиг хандлага судалж, шинэ хэрэгсэл туршиж, эсвэл дизайны хамт олонтойгоо мэдлэгээ хуваалцдаг." },
  "about.skills.title": { en: "Skills & Tools", mn: "Ур чадвар ба хэрэгслүүд" },
  "about.philosophy.title": { en: "My Design Philosophy", mn: "Миний дизайны философи" },
  "about.philosophy.user": { en: "User-Centered", mn: "Хэрэглэгч төвтэй" },
  "about.philosophy.user.desc": { en: "Every design decision is made with the user's needs and goals in mind.", mn: "Дизайны шийдвэр бүрийг хэрэглэгчийн хэрэгцээ, зорилгыг харгалзан гаргадаг." },
  "about.philosophy.innovative": { en: "Innovative", mn: "Шинэлэг" },
  "about.philosophy.innovative.desc": { en: "Pushing boundaries to create unique and memorable experiences.", mn: "Дурсамжтай, өвөрмөц туршлага бүрдүүлэхийн тулд хязгаарыг даван туулна." },
  "about.philosophy.purposeful": { en: "Purposeful", mn: "Зорилготой" },
  "about.philosophy.purposeful.desc": { en: "Every element serves a purpose and contributes to the overall goal.", mn: "Бүр элемент тодорхой зорилготой бөгөөд нийт зорилгод хувь нэмэр оруулна." },
  "about.philosophy.efficient": { en: "Efficient", mn: "Үр ашигтай" },
  "about.philosophy.efficient.desc": { en: "Streamlined processes that deliver results quickly and effectively.", mn: "Хурдан, үр дүнтэй хүргэх нягтруулсан үйл явц." },
  "about.exp.title": { en: "Experience Highlights", mn: "Туршлагын онцлох зүйлс" },
  "about.exp.projects.desc": { en: "From mobile apps to web platforms, each project has been a unique challenge", mn: "Гар утаснаас вэб платформ хүртэл, төсөл бүр өөрийн гэсэн сорилттой байсан" },
  "about.exp.clients.desc": { en: "Long-term relationships built on trust, quality, and results", mn: "Итгэл, чанар, үр дүнд суурилсан урт хугацааны харилцаа" },
  "about.exp.years.desc": { en: "Continuous learning and growth in the ever-evolving design landscape", mn: "Тасралтгүй өөрчлөгдөж буй дизайны ертөнцөд тасралтгүй суралцаж, өсч хөгжих" },

  // Portfolio
  "portfolio.title": { en: "My Portfolio", mn: "Миний портфолио" },
  "portfolio.subtitle": { en: "A collection of projects that showcase my design process, problem-solving skills, and passion for creating exceptional user experiences", mn: "Дизайны үйл явц, асуудал шийдвэрлэх ур чадвар, хэрэглэгчдэд онцгой туршлага бүтээх хүсэл тэмүүллийг харуулсан төслүүдийн цуглуулга" },
  "portfolio.featured": { en: "Featured Projects", mn: "Онцлох төслүүд" },
  "portfolio.all": { en: "All Projects", mn: "Бүх төслүүд" },
  "portfolio.cta": { en: "View All Projects", mn: "Бүх төслийг үзэх" },

  // Testimonials
  "testimonials.title": { en: "Client Testimonials", mn: "Харилцагчдын сэтгэгдэл" },
  "testimonials.subtitle": { en: "Hear what my clients have to say about working together and the results we've achieved", mn: "Намайгтай хамтран ажилласан туршлага, бидний бүтээсэн үр дүнгийн талаар харилцагчид юу хэлж байгааг сонсоорой" },
  "testimonials.stats.client.desc": { en: "Every client has been satisfied with the final deliverables", mn: "Бүх захиалагч эцсийн үр дүнгээр сэтгэл хангалуун байсан" },
  "testimonials.stats.clients.desc": { en: "Long-term relationships built on trust and quality", mn: "Итгэл, чанарт суурилсан урт хугацааны харилцаа" },
  "testimonials.stats.rating.desc": { en: "Consistently receiving 5-star reviews from clients", mn: "Захиалагчдаас тогтмол 5 одтой үнэлгээ авдаг" },

  // Contact
  "contact.title": { en: "Let's Connect", mn: "Холбогдъё" },
  "contact.subtitle": { en: "Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work together", mn: "Таны санааг бодит болгоход бэлэн байна уу? Төслийнхөө талаар ярилцъя." },
  "contact.getInTouch": { en: "Get in Touch", mn: "Холбоо барих" },
  "contact.getInTouch.desc": { en: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's create something amazing together!", mn: "Шинэ төсөл, бүтээлч санаа, эсвэл хамтран ажиллах боломжийн талаар үргэлж нээлттэй. Хамтдаа гайхалтай зүйлийг бүтээцгээе!" },
  "contact.info.email": { en: "Email", mn: "И-мэйл" },
  "contact.info.phone": { en: "Phone", mn: "Утас" },
  "contact.info.location": { en: "Location", mn: "Байршил" },
  "contact.offer.title": { en: "What I Offer", mn: "Би юу санал болгодог вэ" },
  "contact.offer.uiux": { en: "UI/UX Design for Web & Mobile", mn: "Вэб ба мобайлын UI/UX дизайн" },
  "contact.offer.research": { en: "User Research & Testing", mn: "Хэрэглэгчийн судалгаа ба тест" },
  "contact.offer.proto": { en: "Prototyping & Wireframing", mn: "Прототипчлол ба wireframe" },
  "contact.offer.systems": { en: "Design Systems & Branding", mn: "Дизайн систем ба брэндинг" },
  "contact.offer.consult": { en: "Design Consultation", mn: "Дизайн зөвлөх үйлчилгээ" },
  "contact.form.sendMessage": { en: "Send a Message", mn: "Захиа илгээх" },
  "contact.form.name": { en: "Name *", mn: "Нэр *" },
  "contact.form.name.ph": { en: "Your full name", mn: "Таны бүтэн нэр" },
  "contact.form.email": { en: "Email *", mn: "И-мэйл *" },
  "contact.form.email.ph": { en: "your.email@example.com", mn: "your.email@example.com" },
  "contact.form.message": { en: "Message *", mn: "Захиа *" },
  "contact.form.message.ph": { en: "Tell me about your project...", mn: "Төслийнхөө талаар бичнэ үү..." },
  "contact.form.sending": { en: "Sending...", mn: "Илгээж байна..." },
  "contact.form.sent.title": { en: "Message Sent!", mn: "Захиа илгээгдлээ!" },
  "contact.form.sent.subtitle": { en: "Thank you for reaching out. I'll get back to you within 24 hours.", mn: "Холбогдсонд баярлалаа. 24 цагийн дотор буцаж холбогдоно." },
  "contact.form.send": { en: "Send Message", mn: "Захиа илгээх" },

  // Footer
  "footer.brand.desc": { en: "Passionate UI/UX designer creating meaningful digital experiences that users love. Let's bring your ideas to life together.", mn: "Хэрэглэгчдэд таалагдах утга учиртай дижитал туршлага бүтээх хүсэлтэй UI/UX дизайнер. Таны санааг хамтдаа бодит болгоё." },
  "footer.quickLinks": { en: "Quick Links", mn: "Түргэн холбоос" },
  "footer.contact": { en: "Contact", mn: "Холбоо барих" },
  "footer.rights": { en: "All rights reserved.", mn: "Бүх эрх хуулиар хамгаалагдсан." },
  "footer.madeWith": { en: "Made with ❤️ using Next.js & Tailwind CSS", mn: "Next.js ба Tailwind CSS ашиглан бүтээв ❤️" },
}

function getInitialLocale(): SupportedLocale {
  if (typeof window === "undefined") return "en"
  const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY) as SupportedLocale | null
  if (stored === "en" || stored === "mn") return stored
  // Try browser language
  const browser = navigator.language.toLowerCase()
  if (browser.startsWith("mn")) return "mn"
  return "en"
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>(getInitialLocale)

  useEffect(() => {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, locale)
    } catch {}
  }, [locale])

  const setLocale = useCallback((newLocale: SupportedLocale) => {
    setLocaleState(newLocale)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "en" ? "mn" : "en"))
  }, [])

  const t = useCallback(
    (key: string) => {
      const entry = translations[key]
      if (!entry) return key
      return entry[locale] ?? entry.en ?? key
    },
    [locale]
  )

  const value = useMemo<I18nContextValue>(() => ({ locale, setLocale, toggleLocale, t }), [locale, setLocale, toggleLocale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
} 