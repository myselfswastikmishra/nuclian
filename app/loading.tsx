import { Card, CardContent } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card className="border-blue-100 shadow-xl">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Loading...</h2>
              <p className="text-gray-600 text-sm sm:text-base">Please wait while we prepare your content.</p>
            </div>

            <div className="space-y-2">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full animate-pulse" style={{ width: "60%" }}></div>
              </div>
              <p className="text-xs text-gray-500">Loading your experience...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
