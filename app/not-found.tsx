"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, RefreshCw } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card className="border-blue-100 shadow-xl">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-blue-600">404</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Page Not Found</h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered
                the wrong URL.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <Link href="javascript:history.back()">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Go Back
                  </Link>
                </Button>

                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => window.location.reload()}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Need help?{" "}
                <Link href="/get-in-touch" className="text-blue-600 hover:underline">
                  Contact our support team
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
