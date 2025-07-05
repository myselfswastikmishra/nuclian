import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Award, Globe, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { DynamicCodeShowcase } from "@/components/dynamic-code-showcase"

export const metadata: Metadata = {
  title: "About Nuclian - Professional Software Development Team & Company Story",
  description:
    "Learn about Nuclian's mission, values, and expert software development team. Discover our journey in delivering exceptional digital solutions and transforming businesses worldwide.",
  keywords: [
    "about nuclian",
    "software development team",
    "company story",
    "mission and values",
    "expert developers",
    "digital transformation",
    "software development company",
    "remote development team",
  ],
  openGraph: {
    title: "About Nuclian - Professional Software Development Team & Company Story",
    description:
      "Learn about Nuclian's mission, values, and expert software development team. Discover our journey in delivering exceptional digital solutions.",
    url: "https://nuclian.com/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Nuclian Software Development Team",
      },
    ],
  },
  alternates: {
    canonical: "https://nuclian.com/about",
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Client-Centric",
      description: "We put our clients' success at the heart of everything we do",
    },
    {
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Innovation",
      description: "Constantly exploring new technologies and creative solutions",
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Excellence",
      description: "Delivering high-quality work that exceeds expectations",
    },
    {
      icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Global Reach",
      description: "Serving clients worldwide with remote-first approach",
    },
  ]

  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer with 8+ years of experience in building scalable web applications.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
    },
    {
      name: "Sarah Kim",
      role: "UI/UX Designer",
      bio: "Creative designer passionate about creating intuitive and beautiful user experiences.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Engineer",
      bio: "Infrastructure specialist focused on automation and scalable cloud solutions.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
    },
    {
      name: "Emily Chen",
      role: "Data Scientist",
      bio: "AI and machine learning expert helping businesses leverage data for growth.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Python", "TensorFlow", "SQL", "Machine Learning"],
    },
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Technologies Mastered" },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Nuclian",
    description: "Learn about Nuclian's mission, values, and expert software development team.",
    url: "https://nuclian.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "Nuclian",
      description: "Professional freelance software development agency",
      foundingDate: "2019",
      employee: team.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen py-12 sm:py-16 md:py-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm">
                  About Nuclian
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Building the Future of Digital Solutions
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Founded with a vision to democratize access to high-quality software development, Nuclian has grown
                  into a trusted partner for businesses seeking innovative digital solutions.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
                >
                  <Link href="/get-in-touch" aria-label="Work with Nuclian software development team">
                    Work With Us <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <div className="relative order-first lg:order-last">
                <DynamicCodeShowcase />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 bg-blue-50 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <Card className="border-blue-200 h-full">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Target
                      className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mr-3 sm:mr-4 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Mission</h2>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed flex-grow">
                    To empower businesses of all sizes with cutting-edge technology solutions that drive growth,
                    efficiency, and innovation. We believe that exceptional software should be accessible to everyone,
                    not just large corporations.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 h-full">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Lightbulb
                      className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mr-3 sm:mr-4 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Vision</h2>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed flex-grow">
                    To be the leading freelance agency that bridges the gap between innovative technology and practical
                    business solutions, creating a world where every business can leverage the power of modern software.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Core Values</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 sm:mb-4" aria-hidden="true">
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Meet Our Team</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
                Talented professionals passionate about creating exceptional solutions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {team.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-blue-100 h-full">
                  <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role} at Nuclian`}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover"
                      loading="lazy"
                      width={96}
                      height={96}
                    />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to Work Together?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 leading-relaxed px-2">
              Let's discuss how our team can help bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
                <Link href="/get-in-touch" aria-label="Start a software development project with Nuclian">
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
              >
                <Link href="/careers" aria-label="Join the Nuclian software development team">
                  Join Our Team
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
