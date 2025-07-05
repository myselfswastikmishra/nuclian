"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card className="border-red-100 shadow-xl">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-10 w-10 text-red-600" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Something went wrong!</h1>
              <p className="text-gray-600 text-sm sm:text-base">
                We encountered an unexpected error. Our team has been notified and is working to fix this issue.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Button onClick={reset} className="w-full bg-red-600 hover:bg-red-700">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>

              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500">Error ID: {error.digest || "Unknown"}</p>
              <p className="text-xs text-gray-500 mt-1">
                Need help?{" "}
                <Link href="/get-in-touch" className="text-red-600 hover:underline">
                  Contact support
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
