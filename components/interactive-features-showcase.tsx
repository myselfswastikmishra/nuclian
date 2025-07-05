"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Zap, Shield, ArrowRight, Code, Palette, Cloud } from "lucide-react"

export function InteractiveFeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
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
      icon: <Zap className="h-8 w-8 text-green-600" />,
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
      icon: <Shield className="h-8 w-8 text-purple-600" />,
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
    { name: "React", icon: <Code className="h-5 w-5" />, color: "text-blue-500" },
    { name: "Node.js", icon: <Zap className="h-5 w-5" />, color: "text-green-500" },
    { name: "Design", icon: <Palette className="h-5 w-5" />, color: "text-pink-500" },
    { name: "Cloud", icon: <Cloud className="h-5 w-5" />, color: "text-purple-500" },
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
    <div className="relative">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Interactive Features */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Why Choose Nuclian?</h2>

            {/* Feature Tabs */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={`cursor-pointer transition-all duration-300 rounded-xl p-4 ${
                    activeFeature === index
                      ? `${feature.bgColor} border-2 border-opacity-50 shadow-lg scale-105`
                      : "hover:bg-gray-50 border-2 border-transparent"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        activeFeature === index ? "scale-110" : ""
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                    <ArrowRight
                      className={`h-5 w-5 text-gray-400 transition-all duration-300 ${
                        activeFeature === index ? "text-blue-600 translate-x-1" : ""
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className={tech.color}>{tech.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Active Feature Details */}
          <div className="relative">
            <Card className={`${features[activeFeature].bgColor} border-none shadow-2xl overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-10`}></div>
              <CardContent className="relative p-6 sm:p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl bg-white shadow-lg`}>{features[activeFeature].icon}</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{features[activeFeature].title}</h3>
                    <p className="text-gray-600">{features[activeFeature].description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {features[activeFeature].details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress Indicator */}
                <div className="flex space-x-2 mt-6">
                  {features.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeFeature ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
