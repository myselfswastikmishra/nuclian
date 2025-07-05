"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ]

  // Scroll to top when navigating
  const handleNavigation = (href: string) => {
    setIsOpen(false)
    if (pathname === href) {
      // If already on the page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Navigate to page and scroll to top
      router.push(href)
    }
  }

  const handleLogoClick = () => {
    setIsOpen(false)
    if (pathname === "/") {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Navigate to home page
      router.push("/")
    }
  }

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
              aria-label="Nuclian - Go to homepage"
            >
              <div className="h-7 w-7 sm:h-8 sm:w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">N</span>
              </div>
              <span className="font-bold text-lg sm:text-xl text-gray-900">Nuclian</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`text-sm xl:text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 ${
                  pathname === item.href ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button
              onClick={() => handleNavigation("/get-in-touch")}
              className="bg-blue-600 hover:bg-blue-700 text-sm xl:text-base px-4 xl:px-6 focus:ring-2 focus:ring-blue-500"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 sm:h-10 sm:w-10 focus:ring-2 focus:ring-blue-500"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 sm:p-6 border-b">
                  <button
                    onClick={handleLogoClick}
                    className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
                    aria-label="Nuclian - Go to homepage"
                  >
                    <div className="h-7 w-7 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-base">N</span>
                    </div>
                    <span className="font-bold text-lg text-gray-900">Nuclian</span>
                  </button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 focus:ring-2 focus:ring-blue-500"
                    aria-label="Close navigation menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav
                  className="flex flex-col space-y-1 p-4 sm:p-6 flex-grow"
                  role="navigation"
                  aria-label="Mobile navigation"
                >
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className={`text-base sm:text-lg font-medium transition-colors py-3 px-2 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
                <div className="p-4 sm:p-6 border-t">
                  <Button
                    onClick={() => handleNavigation("/get-in-touch")}
                    className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base focus:ring-2 focus:ring-blue-500"
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
