import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { InteractiveBackground } from "@/components/interactive-background"
import { CursorFollower } from "@/components/cursor-follower"

export default function Home() {
  return (
    <main className="min-h-screen">
      <InteractiveBackground />
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <CursorFollower />
    </main>
  )
}
