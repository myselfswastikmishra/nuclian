import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/seo/json-ld"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nuclian.com"),
  title: {
    default: "Nuclian - Professional Freelance Software Development Agency",
    template: "%s | Nuclian - Professional Software Development",
  },
  description:
    "Leading freelance software development agency specializing in web development, mobile apps, AI automation, and digital solutions. Transform your business with cutting-edge technology.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "freelance agency",
    "AI automation",
    "digital solutions",
    "React development",
    "Next.js development",
    "custom software",
    "business automation",
    "cloud solutions",
    "DevOps services",
  ],
  authors: [{ name: "Nuclian Team" }],
  creator: "Nuclian",
  publisher: "Nuclian",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nuclian.com",
    siteName: "Nuclian",
    title: "Nuclian - Professional Freelance Software Development Agency",
    description:
      "Leading freelance software development agency specializing in web development, mobile apps, AI automation, and digital solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nuclian - Professional Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuclian - Professional Freelance Software Development Agency",
    description:
      "Leading freelance software development agency specializing in web development, mobile apps, AI automation, and digital solutions.",
    images: ["/twitter-image.jpg"],
    creator: "@nuclian",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://nuclian.com",
  },
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
