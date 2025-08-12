"use client"

import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function LanguageToggle() {
  const { locale, toggleLocale } = useI18n()

  return (
    <Button variant="ghost" size="sm" onClick={toggleLocale} aria-label="Toggle language">
      {locale === "en" ? "EN" : "MN"}
    </Button>
  )
} 