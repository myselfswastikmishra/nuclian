"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const services = [
    "Web Development",
    "Mobile Apps",
    "Graphic Design",
    "DevOps & Cloud",
    "Data Services",
    "AI & Automation",
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Get in Touch", href: "/get-in-touch" },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      // Handle newsletter subscription
      setIsSubscribed(true)
      setEmail("")
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-xl">Nuclian</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
              Creating exceptional software solutions that deliver outstanding user experiences and drive business
              growth.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800 h-9 w-9 sm:h-10 sm:w-10"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800 h-9 w-9 sm:h-10 sm:w-10"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800 h-9 w-9 sm:h-10 sm:w-10"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800 h-9 w-9 sm:h-10 sm:w-10"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@nuclian.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base break-all"
                >
                  hello@nuclian.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">Remote & Global</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-8 sm:pt-12 pb-8 sm:pb-12 mt-8 sm:mt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-semibold text-lg sm:text-xl text-white mb-3 sm:mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed px-2">
              Get the latest industry insights, tech trends, and company updates delivered to your inbox.
            </p>

            {isSubscribed ? (
              <div className="flex items-center justify-center text-green-400 bg-green-900/20 rounded-lg py-4 sm:py-6 px-4 sm:px-6 mx-2">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg font-medium text-center">
                  Thank you for subscribing! Check your email for confirmation.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-2"
              >
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 h-11 sm:h-12 px-4 text-sm sm:text-base"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 sm:px-8 h-11 sm:h-12 whitespace-nowrap text-sm sm:text-base"
                >
                  Subscribe
                </Button>
              </form>
            )}

            <p className="text-xs sm:text-sm text-gray-500 mt-4 px-2">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Nuclian. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
