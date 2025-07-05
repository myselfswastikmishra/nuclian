"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Video, MessageSquare, Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import { MeetingScheduler } from "@/components/meeting-scheduler"

export default function GetInTouchPage() {
  const [showScheduler, setShowScheduler] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    description: "",
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        description: "",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const contactMethods = [
    {
      icon: <Video className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Schedule a Meeting",
      description: "Book a 15 or 30-minute video call with our executive",
      action: "Schedule Now",
      onClick: () => setShowScheduler(true),
    },
    {
      icon: <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Send a Message",
      description: "Fill out our contact form and we'll get back to you",
      action: "Contact Form",
      onClick: () => {
        const element = document.getElementById("contact-form")
        element?.scrollIntoView({ behavior: "smooth" })
      },
    },
    {
      icon: <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Call Us Directly",
      description: "Speak with our team immediately",
      action: "+1 (555) 123-4567",
      onClick: () => (window.location.href = "tel:+15551234567"),
    },
    {
      icon: <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      title: "Email Us",
      description: "Send us an email for detailed inquiries",
      action: "hello@nuclian.com",
      onClick: () =>
        (window.location.href =
          "mailto:hello@nuclian.com?subject=Project Inquiry&body=Hello Nuclian Team,%0D%0A%0D%0AI would like to discuss a project with you. Here are my details:%0D%0A%0D%0AName: %0D%0ACompany: %0D%0AProject Type: %0D%0ATimeline: %0D%0ABudget Range: %0D%0A%0D%0AProject Description:%0D%0A%0D%0AThank you!"),
    },
  ]

  if (showScheduler) {
    return <MeetingScheduler onBack={() => setShowScheduler(false)} />
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm">
            Get in Touch
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Let's Start a Conversation
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Ready to transform your digital presence? We're here to help. Choose how you'd like to connect with our team
            and let's discuss your project.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              How Would You Like to Connect?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Choose the method that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-blue-100 cursor-pointer group h-full"
                onClick={method.onClick}
              >
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <div className="flex justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{method.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow leading-relaxed">
                    {method.description}
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700 h-10 sm:h-11 text-sm sm:text-base">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Meeting CTA */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 bg-blue-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Video className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Speak Directly with Our Executive
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
            Get personalized insights and discuss your project requirements in a one-on-one video call.
          </p>
          <Button
            size="lg"
            onClick={() => setShowScheduler(true)}
            className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 mb-6 sm:mb-8"
          >
            Click here to speak to our executive
          </Button>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-blue-600" />
              15 or 30 minutes
            </div>
            <div className="flex items-center">
              <Video className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-blue-600" />
              Video call
            </div>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-blue-600" />
              Choose your time
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Send Us a Message</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="border-blue-200">
            <CardHeader className="p-4 sm:p-6 lg:p-8 pb-0">
              <CardTitle className="text-xl sm:text-2xl text-center text-gray-900">Contact Form</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              {formSubmitted ? (
                <div className="text-center py-6 sm:py-8">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-sm sm:text-base text-gray-600 px-2">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="border-blue-200 focus:border-blue-500 h-10 sm:h-12 text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="border-blue-200 focus:border-blue-500 h-10 sm:h-12 text-sm sm:text-base"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="border-blue-200 focus:border-blue-500 h-10 sm:h-12 text-sm sm:text-base"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="border-blue-200 focus:border-blue-500 h-10 sm:h-12 text-sm sm:text-base"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      required
                      rows={5}
                      className="border-blue-200 focus:border-blue-500 text-sm sm:text-base resize-none"
                      placeholder="Tell us about your project, requirements, timeline, and any specific needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 h-11 sm:h-12 text-sm sm:text-base"
                  >
                    Submit Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Other Ways to Reach Us</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              We're here to help in whatever way works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-2">For general inquiries</p>
              <a
                href="mailto:hello@nuclian.com"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base break-all"
              >
                hello@nuclian.com
              </a>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-2">Call us directly</p>
              <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-2">We work remotely</p>
              <span className="text-blue-600 font-medium text-sm sm:text-base">Global & Remote</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
