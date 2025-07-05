"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Users, Globe, Heart, Zap, CheckCircle } from "lucide-react"

export default function CareersPage() {
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const benefits = [
    {
      icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with flexible hours",
    },
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Health & Wellness",
      description: "Comprehensive health benefits and wellness programs",
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Professional Growth",
      description: "Continuous learning opportunities and skill development",
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Collaborative Team",
      description: "Work with talented professionals in a supportive environment",
    },
  ]

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies.",
      requirements: ["5+ years experience", "React/Node.js expertise", "Cloud platform knowledge"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote",
      description: "Create intuitive and beautiful user experiences for web and mobile applications.",
      requirements: ["3+ years experience", "Figma/Adobe expertise", "User research skills"],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      description: "Build and maintain CI/CD pipelines, infrastructure automation, and cloud deployments.",
      requirements: ["4+ years experience", "AWS/Docker expertise", "Kubernetes knowledge"],
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      type: "Contract",
      location: "Remote",
      description: "Develop cross-platform mobile applications using React Native and native technologies.",
      requirements: ["3+ years experience", "React Native expertise", "iOS/Android knowledge"],
    },
  ]

  const values = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative problem-solving approaches.",
    },
    {
      title: "Quality Excellence",
      description: "We deliver exceptional work that exceeds client expectations every time.",
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and encourage skill development.",
    },
    {
      title: "Work-Life Balance",
      description: "We believe in sustainable work practices and personal well-being.",
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setApplicationForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create professional email template
    const subject = "Job Application - Nuclian Career Opportunity"
    const body = `Dear Nuclian Hiring Team,

I hope this email finds you well. I am writing to express my interest in joining the Nuclian team and would like to submit my application for consideration.

APPLICANT INFORMATION:
Name: ${applicationForm.name}
Email: ${applicationForm.email}
Phone: ${applicationForm.phone}
Position: ${applicationForm.position}
Experience: ${applicationForm.experience}

Cover Letter:
${applicationForm.coverLetter}

Thank you for considering my application. I look forward to the opportunity to contribute to Nuclian.

Best regards,
${applicationForm.name}`

    // Open email client with pre-filled content
    const mailtoLink = `mailto:hr@nuclian.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink

    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setApplicationForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        coverLetter: "",
        resume: null,
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm">
            Join Our Team
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Careers at Nuclian
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Join a team of passionate professionals building the future of digital solutions. We're looking for talented
            individuals who share our vision of creating exceptional software experiences.
          </p>
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-2">Questions about careers?</p>
            <a
              href="mailto:hr@nuclian.com"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base md:text-lg break-all sm:break-normal"
            >
              Contact us at hr@nuclian.com
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 bg-blue-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Work With Us?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              We believe in creating an environment where our team can thrive
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-blue-200 h-full">
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex justify-center mb-3 sm:mb-4">{benefit.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Open Positions</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">Find your next opportunity with us</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-blue-100 h-full flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                    <div className="flex-grow">
                      <CardTitle className="text-xl sm:text-2xl text-gray-900 mb-2 leading-tight">
                        {position.title}
                      </CardTitle>
                      <p className="text-sm sm:text-base text-gray-600">{position.department}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:flex-shrink-0">
                      <Badge className="bg-blue-100 text-blue-800 text-xs sm:text-sm">{position.type}</Badge>
                      <Badge variant="outline" className="text-xs sm:text-sm">
                        {position.location}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{position.description}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600 leading-relaxed">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    onClick={() => {
                      const element = document.getElementById("application-form")
                      element?.scrollIntoView({ behavior: "smooth" })
                      setApplicationForm((prev) => ({ ...prev, position: position.title }))
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base py-2 sm:py-3"
                  >
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-blue-100 h-full">
                <CardContent className="p-4 sm:p-6 flex items-start h-full">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Submit Your Application
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Ready to join our team? Send us your details and we'll get back to you soon.
            </p>
          </div>

          <Card className="border-blue-200">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              {isSubmitted ? (
                <div className="text-center py-6 sm:py-8">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Application Sent Successfully!</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 px-2">
                    Your application has been forwarded to hr@nuclian.com. We'll review your application and get back to
                    you within 48 hours.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 px-2">
                    If you don't see the email client open, please send your application directly to hr@nuclian.com
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={applicationForm.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="border-blue-200 focus:border-blue-500 text-sm sm:text-base h-10 sm:h-12"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={applicationForm.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="border-blue-200 focus:border-blue-500 text-sm sm:text-base h-10 sm:h-12"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={applicationForm.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="border-blue-200 focus:border-blue-500 text-sm sm:text-base h-10 sm:h-12"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                        Position Applied For *
                      </label>
                      <Input
                        id="position"
                        type="text"
                        value={applicationForm.position}
                        onChange={(e) => handleInputChange("position", e.target.value)}
                        required
                        className="border-blue-200 focus:border-blue-500 text-sm sm:text-base h-10 sm:h-12"
                        placeholder="e.g., Senior Full-Stack Developer"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Relevant Experience *
                    </label>
                    <Textarea
                      id="experience"
                      value={applicationForm.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      required
                      rows={4}
                      className="border-blue-200 focus:border-blue-500 text-sm sm:text-base resize-none"
                      placeholder="Tell us about your relevant work experience, skills, and achievements..."
                    />
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter *
                    </label>
                    <Textarea
                      id="coverLetter"
                      value={applicationForm.coverLetter}
                      onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                      required
                      rows={6}
                      className="border-blue-200 focus:border-blue-500 text-sm sm:text-base resize-none"
                      placeholder="Why do you want to work with Nuclian? What makes you a great fit for this role?"
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                      Resume/CV
                    </label>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        setApplicationForm((prev) => ({
                          ...prev,
                          resume: e.target.files ? e.target.files[0] : null,
                        }))
                      }
                      className="border-blue-200 focus:border-blue-500 text-sm sm:text-base h-10 sm:h-12 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Please attach your resume (PDF, DOC, or DOCX format)
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base lg:text-lg py-3 sm:py-4 font-medium"
                      disabled={
                        !applicationForm.name ||
                        !applicationForm.email ||
                        !applicationForm.phone ||
                        !applicationForm.position ||
                        !applicationForm.experience ||
                        !applicationForm.coverLetter
                      }
                    >
                      Send Your Application
                    </Button>
                    <p className="text-xs sm:text-sm text-gray-500 text-center mt-3 px-2">
                      By submitting this form, your application will be sent to hr@nuclian.com
                    </p>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
