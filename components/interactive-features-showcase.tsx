"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Zap, Shield, ArrowRight, Code, Palette, Cloud } from "lucide-react"

export function InteractiveFeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const features = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Expert Team",
      description: "Skilled professionals with years of industry experience",
      details: [
        "Full-stack development expertise",
        "Cutting-edge technology solutions",
        "Responsive and accessible design",
        "24/7 support and maintenance",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Zap className="h-6 w-6 text-green-600" />,
      title: "Fast Delivery",
      description: "Agile development process ensuring quick turnaround times",
      details: [
        "Rapid prototyping and iteration",
        "Continuous integration and deployment",
        "Real-time progress tracking",
        "Flexible project management",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Quality Assured",
      description: "Rigorous testing and quality control for every project",
      details: [
        "Comprehensive testing strategies",
        "Code review and optimization",
        "Performance monitoring",
        "Security best practices",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const techStack = [
    { name: "React", icon: <Code className="h-4 w-4" />, color: "text-blue-500" },
    { name: "Node.js", icon: <Zap className="h-4 w-4" />, color: "text-green-500" },
    { name: "Design", icon: <Palette className="h-4 w-4" />, color: "text-pink-500" },
    { name: "Cloud", icon: <Cloud className="h-4 w-4" />, color: "text-purple-500" },
  ]

  useEffect(() => {
    if (!isAnimating) return
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAnimating, features.length])

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index)
    setIsAnimating(false)
    setTimeout(() => setIsAnimating(true), 8000)
  }

  return (
    <div className="relative max-w-md">
      {/* Background Animation - Smaller */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
        <div className="space-y-4">
          {/* Compact Header */}
          <h2 className="text-lg font-bold text-gray-900 text-center">Why Choose Nuclian?</h2>

          {/* Compact Feature Tabs */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => handleFeatureClick(index)}
                className={`cursor-pointer transition-all duration-300 rounded-lg p-3 ${
                  activeFeature === index
                    ? `${feature.bgColor} border border-opacity-50 shadow-md scale-[1.02]`
                    : "hover:bg-gray-50 border border-transparent"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      activeFeature === index ? "scale-110" : ""
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-xs text-gray-600 truncate">{feature.description}</p>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 text-gray-400 transition-all duration-300 flex-shrink-0 ${
                      activeFeature === index ? "text-blue-600 translate-x-1" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Compact Active Feature Details */}
          <Card className={`${features[activeFeature].bgColor} border-none shadow-lg overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-10`}></div>
            <CardContent className="relative p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`p-2 rounded-lg bg-white shadow-sm`}>{features[activeFeature].icon}</div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-gray-900">{features[activeFeature].title}</h3>
                </div>
              </div>

              <ul className="space-y-2 mb-3">
                {features[activeFeature].details.slice(0, 3).map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-xs text-gray-700 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Progress Indicator */}
              <div className="flex space-x-1 justify-center">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeFeature ? "w-6 bg-blue-600" : "w-1.5 bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compact Tech Stack */}
          <div className="flex flex-wrap gap-2 justify-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-1 bg-white border border-gray-200 rounded-full px-2 py-1 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className={tech.color}>{tech.icon}</span>
                <span className="text-xs font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
