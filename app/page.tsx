import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { TestimonialsSection } from "@/components/testimonials-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Freelance Software Development Agency",
  description:
    "Transform your business with exceptional software solutions. Web development, mobile apps, AI automation, and digital transformation services by expert developers.",
  keywords: [
    "freelance software development",
    "web development agency",
    "mobile app development",
    "AI automation services",
    "digital transformation",
    "custom software solutions",
    "React development",
    "Next.js development",
  ],
  openGraph: {
    title: "Nuclian - Professional Freelance Software Development Agency",
    description:
      "Transform your business with exceptional software solutions. Web development, mobile apps, AI automation, and digital transformation services.",
    url: "https://nuclian.com",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Nuclian - Professional Software Development Services",
      },
    ],
  },
  alternates: {
    canonical: "https://nuclian.com",
  },
}

export default function HomePage() {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions",
      icon: "📱",
    },
    {
      title: "Graphic Design",
      description: "Brand identity and visual design solutions",
      icon: "🎨",
    },
    {
      title: "DevOps & Cloud",
      description: "Infrastructure automation and cloud deployment",
      icon: "☁️",
    },
    {
      title: "Data Services",
      description: "Data analytics and business intelligence",
      icon: "📊",
    },
    {
      title: "AI Agents & Automation",
      description: "Custom AI solutions and workflow automation",
      icon: "🤖",
    },
  ]

  const features = [
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Expert Team",
      description: "Skilled professionals with years of industry experience",
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Fast Delivery",
      description: "Agile development process ensuring quick turnaround times",
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Quality Assured",
      description: "Rigorous testing and quality control for every project",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Nuclian - Professional Freelance Software Development Agency",
    description:
      "Transform your business with exceptional software solutions. Web development, mobile apps, AI automation, and digital transformation services.",
    url: "https://nuclian.com",
    mainEntity: {
      "@type": "Organization",
      name: "Nuclian",
      description: "Professional freelance software development agency",
      services: services.map((service) => ({
        "@type": "Service",
        name: service.title,
        description: service.description,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm">
                  Professional Freelance Agency
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Exceptional Software Solutions for Your Business
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  At Nuclian, we create user-friendly, intuitive software solutions that deliver exceptional user
                  experiences. From web development to AI automation, we bring your digital vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
                  >
                    <Link href="/get-in-touch" aria-label="Contact Nuclian for software development services">
                      Get in Touch <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base bg-transparent"
                  >
                    <Link href="/services" aria-label="View our software development services">
                      View Our Services
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 text-white">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Why Choose Nuclian?</h2>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start">
                      <CheckCircle
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-blue-200 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm sm:text-base">Full-stack development expertise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-blue-200 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm sm:text-base">Cutting-edge technology solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-blue-200 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm sm:text-base">Responsive and accessible design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-blue-200 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm sm:text-base">24/7 support and maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our Core Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
                We offer comprehensive digital solutions to help your business thrive in the modern landscape
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-blue-100 h-full">
                  <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4" aria-hidden="true">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 justify-start h-auto">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
              >
                <Link href="/services" aria-label="View all our software development services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why Businesses Trust Nuclian
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
                We combine technical expertise with business understanding
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 sm:mb-4" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 leading-relaxed px-2">
              Let's discuss your project and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
                <Link href="/get-in-touch" aria-label="Start your software development project with Nuclian">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
              >
                <Link href="/about" aria-label="Learn more about Nuclian software development team">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
