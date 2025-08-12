import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shinezaya Myagmar - UI/UX Designer",
  description: "Professional UI/UX Designer creating beautiful, user-centered digital experiences. View my portfolio of design projects and case studies.",
  keywords: ["UI/UX Designer", "User Experience", "User Interface", "Design Portfolio", "Digital Design"],
  authors: [{ name: "Shinezaya Myagmar" }],
  creator: "Shinezaya Myagmar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shinezaya-portfolio.vercel.app",
    title: "Shinezaya Myagmar - UI/UX Designer",
    description: "Professional UI/UX Designer creating beautiful, user-centered digital experiences.",
    siteName: "Shinezaya Myagmar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shinezaya Myagmar - UI/UX Designer",
    description: "Professional UI/UX Designer creating beautiful, user-centered digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
