import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Palette, Cloud, Database, Bot, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Software Development Services - Web, Mobile, AI & Cloud Solutions",
  description:
    "Comprehensive software development services including web development, mobile apps, AI automation, cloud solutions, and digital transformation. Expert developers delivering cutting-edge solutions.",
  keywords: [
    "software development services",
    "web development",
    "mobile app development",
    "AI automation",
    "cloud solutions",
    "DevOps services",
    "digital transformation",
    "custom software development",
    "React development services",
    "Node.js development",
  ],
  openGraph: {
    title: "Software Development Services - Web, Mobile, AI & Cloud Solutions",
    description:
      "Comprehensive software development services including web development, mobile apps, AI automation, cloud solutions, and digital transformation.",
    url: "https://nuclian.com/services",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Nuclian Software Development Services",
      },
    ],
  },
  alternates: {
    canonical: "https://nuclian.com/services",
  },
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-600" />,
      title: "Web Development",
      description: "Full-stack web applications built with modern frameworks and technologies",
      features: [
        "React, Next.js, Vue.js development",
        "Node.js and Python backends",
        "Database design and optimization",
        "API development and integration",
        "E-commerce solutions",
        "Progressive Web Apps (PWAs)",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      icon: <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-600" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "React Native development",
        "Native iOS and Android apps",
        "Cross-platform solutions",
        "App Store optimization",
        "Push notifications",
        "Offline functionality",
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase"],
    },
    {
      icon: <Palette className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-600" />,
      title: "Graphic Design",
      description: "Brand identity and visual design solutions that make an impact",
      features: [
        "Logo and brand identity design",
        "UI/UX design for web and mobile",
        "Marketing materials and collateral",
        "Website and app mockups",
        "Social media graphics",
        "Print design services",
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "Principle", "InVision"],
    },
    {
      icon: <Cloud className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-600" />,
      title: "DevOps & Cloud Services",
      description: "Infrastructure automation and cloud deployment solutions",
      features: [
        "AWS, Azure, GCP deployment",
        "Docker containerization",
        "Kubernetes orchestration",
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Monitoring and logging",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    },
    {
      icon: <Database className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-600" />,
      title: "Data Services",
      description: "Data analytics and business intelligence solutions",
      features: [
        "Data pipeline development",
        "Business intelligence dashboards",
        "Data visualization",
        "ETL processes",
        "Machine learning models",
        "Data warehouse design",
      ],
      technologies: ["Python", "SQL", "Tableau", "Power BI", "Apache Spark"],
    },
    {
      icon: <Bot className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-600" />,
      title: "AI Agents & Automation",
      description: "Custom AI solutions and workflow automation to streamline operations",
      features: [
        "Chatbot development",
        "Process automation",
        "AI-powered analytics",
        "Custom AI models",
        "Workflow optimization",
        "Integration with existing systems",
      ],
      technologies: ["OpenAI", "TensorFlow", "PyTorch", "Zapier", "Microsoft Power Automate"],
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Software Development Services",
    description:
      "Comprehensive software development services including web development, mobile apps, AI automation, cloud solutions, and digital transformation.",
    url: "https://nuclian.com/services",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((service, index) => ({
        "@type": "Service",
        position: index + 1,
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Nuclian",
        },
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen py-12 sm:py-16 md:py-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm">
              Our Services
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
              From web development to AI automation, we provide end-to-end solutions that drive business growth and
              digital transformation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
            >
              <Link href="/get-in-touch" aria-label="Discuss your software development project with Nuclian">
                Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-blue-100 h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                      <div aria-hidden="true">{service.icon}</div>
                      <CardTitle className="text-xl sm:text-2xl text-gray-900 leading-tight">{service.title}</CardTitle>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="mb-4 sm:mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">What we offer:</h3>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle
                              className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4 sm:mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Technologies:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-blue-50 text-blue-700 text-xs sm:text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 h-10 sm:h-11 text-sm sm:text-base">
                      <Link href="/get-in-touch" aria-label={`Get started with ${service.title} services`}>
                        Get Started <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our Development Process
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your requirements and business goals",
                },
                {
                  step: "02",
                  title: "Planning",
                  description: "Creating detailed project roadmap and timeline",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building your solution with regular updates",
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "Testing, deployment, and ongoing support",
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-3 sm:mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{phase.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
              Let's discuss how we can help bring your vision to life with our comprehensive services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
              >
                <Link href="/get-in-touch" aria-label="Get free consultation for your software development project">
                  Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base bg-transparent"
              >
                <Link href="/about" aria-label="Learn more about Nuclian software development team">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
