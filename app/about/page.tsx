import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Award, Clock, Globe } from "lucide-react"
import Link from "next/link"
import { DynamicCodeShowcase } from "@/components/dynamic-code-showcase"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Nuclian - Professional Software Development Team & Company Story",
  description:
    "Learn about Nuclian's expert software development team, our mission to deliver exceptional digital solutions, and our commitment to innovation and quality.",
  keywords: [
    "about nuclian",
    "software development team",
    "company story",
    "expert developers",
    "digital solutions",
    "innovation",
    "quality assurance",
  ],
  openGraph: {
    title: "About Nuclian - Professional Software Development Team",
    description:
      "Meet the expert team behind Nuclian's exceptional software solutions. Learn our story, mission, and commitment to delivering outstanding results.",
    url: "https://nuclian.com/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Nuclian - Professional Software Development Team",
      },
    ],
  },
  alternates: {
    canonical: "https://nuclian.com/about",
  },
}

export default function AboutPage() {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Award className="h-6 w-6" />, value: "98%", label: "Client Satisfaction" },
    { icon: <Clock className="h-6 w-6" />, value: "5+", label: "Years Experience" },
    { icon: <Globe className="h-6 w-6" />, value: "15+", label: "Countries Served" },
  ]

  const values = [
    {
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
    },
    {
      title: "Quality Assurance",
      description:
        "Every project undergoes rigorous testing and quality control to ensure exceptional performance and reliability.",
    },
    {
      title: "Client Partnership",
      description:
        "We believe in building long-term relationships with our clients, working as an extension of their team.",
    },
    {
      title: "Continuous Learning",
      description:
        "Our team constantly updates their skills and knowledge to master the latest technologies and best practices.",
    },
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Developer & Founder",
      description: "Full-stack developer with 8+ years of experience in React, Node.js, and cloud architecture.",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      description: "Creative designer specializing in user-centered design and modern interface development.",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Engineer",
      description: "Infrastructure expert focused on scalable cloud solutions and automated deployment pipelines.",
      avatar: "/placeholder.svg?height=120&width=120",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Nuclian - Professional Software Development Team",
    description:
      "Learn about Nuclian's expert software development team, our mission, and our commitment to delivering exceptional digital solutions.",
    url: "https://nuclian.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "Nuclian",
      description: "Professional freelance software development agency",
      foundingDate: "2019",
      numberOfEmployees: "10-50",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Remote",
        addressCountry: "Global",
      },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm">
                  About Our Company
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Building the Future of Digital Solutions
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  At Nuclian, we're passionate about creating exceptional software solutions that transform businesses
                  and deliver outstanding user experiences. Our team combines technical expertise with creative
                  innovation to bring your digital vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
                  >
                    <Link href="/get-in-touch" aria-label="Contact Nuclian team">
                      Work With Us <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base bg-transparent"
                  >
                    <Link href="/services" aria-label="View our services">
                      Our Services
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <DynamicCodeShowcase />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 sm:mb-4 text-blue-600" aria-hidden="true">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                Founded in 2019, Nuclian began as a vision to bridge the gap between innovative technology and practical
                business solutions. What started as a small team of passionate developers has grown into a trusted
                partner for businesses worldwide.
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                We believe that great software isn't just about code—it's about understanding our clients' needs,
                challenges, and goals. Every project we undertake is an opportunity to create something meaningful that
                drives real business value.
              </p>
              <p className="text-base sm:text-lg md:text-xl">
                Today, we continue to push the boundaries of what's possible in software development, always staying
                true to our core values of quality, innovation, and client success.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-blue-100 h-full">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Meet Our Team</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
                The talented individuals behind our success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-blue-100">
                  <CardContent className="p-4 sm:p-6">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4"
                    />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{member.name}</h3>
                    <p className="text-sm sm:text-base text-blue-600 font-medium mb-2 sm:mb-3">{member.role}</p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-600 leading-relaxed px-2">
              Let's discuss how we can help bring your vision to life with our expertise and passion for excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
              >
                <Link href="/get-in-touch" aria-label="Contact Nuclian for your project">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base bg-transparent"
              >
                <Link href="/services" aria-label="View our software development services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
