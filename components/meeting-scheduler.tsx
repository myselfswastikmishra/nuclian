"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { ArrowLeft, Clock, Video, CalendarIcon, CheckCircle } from "lucide-react"

interface MeetingSchedulerProps {
  onBack: () => void
}

export function MeetingScheduler({ onBack }: MeetingSchedulerProps) {
  const [step, setStep] = useState(1) // 1: Duration, 2: Date/Time, 3: Details, 4: Confirmation
  const [duration, setDuration] = useState<"15" | "30" | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [meetingDetails, setMeetingDetails] = useState({
    name: "",
    email: "",
    company: "",
    agenda: "",
  })
  const [isScheduled, setIsScheduled] = useState(false)

  // Available time slots
  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
  ]

  const handleScheduleMeeting = () => {
    // Handle meeting scheduling logic here
    console.log("Meeting scheduled:", {
      duration,
      date: selectedDate,
      time: selectedTime,
      details: meetingDetails,
    })
    setIsScheduled(true)
  }

  const isDateDisabled = (date: Date) => {
    const today = new Date()
    const dayOfWeek = date.getDay()
    // Disable weekends and past dates
    return date < today || dayOfWeek === 0 || dayOfWeek === 6
  }

  if (isScheduled) {
    return (
      <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="h-16 w-16 sm:h-20 sm:w-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Meeting Scheduled Successfully!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
            Your {duration}-minute meeting has been scheduled for{" "}
            {selectedDate?.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            at {selectedTime}.
          </p>
          <Card className="border-blue-200 mb-6 sm:mb-8">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Meeting Details</h3>
              <div className="space-y-2 sm:space-y-3 text-left">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-gray-600 text-sm sm:text-base">Duration:</span>
                  <span className="font-medium text-sm sm:text-base">{duration} minutes</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-gray-600 text-sm sm:text-base">Date:</span>
                  <span className="font-medium text-sm sm:text-base">
                    {selectedDate?.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-gray-600 text-sm sm:text-base">Time:</span>
                  <span className="font-medium text-sm sm:text-base">{selectedTime}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-gray-600 text-sm sm:text-base">Meeting Type:</span>
                  <span className="font-medium text-sm sm:text-base">Video Call</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed px-2">
            A calendar invitation with the video call link has been sent to {meetingDetails.email}. You'll also receive
            a reminder 15 minutes before the meeting.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              onClick={onBack}
              variant="outline"
              className="h-10 sm:h-11 px-4 sm:px-6 text-sm sm:text-base bg-transparent"
            >
              Schedule Another Meeting
            </Button>
            <Button
              onClick={onBack}
              className="bg-blue-600 hover:bg-blue-700 h-10 sm:h-11 px-4 sm:px-6 text-sm sm:text-base"
            >
              Back to Contact Page
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8 gap-4">
          <Button variant="ghost" onClick={onBack} className="self-start">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex-grow">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Schedule a Meeting</h1>
            <p className="text-sm sm:text-base text-gray-600">Book a video call with our executive</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                    step >= stepNumber ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-8 sm:w-12 h-0.5 mx-1 sm:mx-2 ${step > stepNumber ? "bg-blue-600" : "bg-gray-200"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Choose Duration */}
        {step === 1 && (
          <Card className="border-blue-200">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
              <CardTitle className="text-xl sm:text-2xl text-center">Choose Meeting Duration</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                <Card
                  className={`cursor-pointer transition-all ${
                    duration === "15" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setDuration("15")}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">15 Minutes</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Quick consultation and project overview
                    </p>
                    {duration === "15" && <Badge className="mt-3 bg-blue-600 text-xs sm:text-sm">Selected</Badge>}
                  </CardContent>
                </Card>
                <Card
                  className={`cursor-pointer transition-all ${
                    duration === "30" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setDuration("30")}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">30 Minutes</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Detailed discussion and requirements analysis
                    </p>
                    {duration === "30" && <Badge className="mt-3 bg-blue-600 text-xs sm:text-sm">Selected</Badge>}
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-6 sm:mt-8">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!duration}
                  className="bg-blue-600 hover:bg-blue-700 h-10 sm:h-11 px-6 sm:px-8 text-sm sm:text-base"
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Choose Date and Time */}
        {step === 2 && (
          <Card className="border-blue-200">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
              <CardTitle className="text-xl sm:text-2xl text-center">Select Date and Time</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                    <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
                    Choose Date
                  </h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={isDateDisabled}
                    className="rounded-md border border-blue-200 w-full"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
                    Choose Time
                  </h3>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className={`text-xs sm:text-sm h-8 sm:h-9 ${
                            selectedTime === time
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "border-blue-200 hover:bg-blue-50 bg-transparent"
                          }`}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm sm:text-base">Please select a date first</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="h-10 sm:h-11 px-4 sm:px-6 text-sm sm:text-base"
                >
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-blue-600 hover:bg-blue-700 h-10 sm:h-11 px-4 sm:px-6 text-sm sm:text-base"
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Meeting Details */}
        {step === 3 && (
          <Card className="border-blue-200">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
              <CardTitle className="text-xl sm:text-2xl text-center">Your Details</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <Input
                      value={meetingDetails.name}
                      onChange={(e) => setMeetingDetails((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                      className="border-blue-200 h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      value={meetingDetails.email}
                      onChange={(e) => setMeetingDetails((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@company.com"
                      className="border-blue-200 h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <Input
                    value={meetingDetails.company}
                    onChange={(e) => setMeetingDetails((prev) => ({ ...prev, company: e.target.value }))}
                    placeholder="Your company name"
                    className="border-blue-200 h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Agenda</label>
                  <Input
                    value={meetingDetails.agenda}
                    onChange={(e) => setMeetingDetails((prev) => ({ ...prev, agenda: e.target.value }))}
                    placeholder="What would you like to discuss?"
                    className="border-blue-200 h-10 sm:h-12 text-sm sm:text-base"
                  />
                </div>

                {/* Meeting Summary */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Meeting Summary</h4>
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span>{duration} minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span>
                          {selectedDate?.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span>{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="flex items-center">
                          <Video className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Video Call
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="h-10 sm:h-11 px-4 sm:px-6 text-sm sm:text-base"
                >
                  Back
                </Button>
                <Button
                  onClick={handleScheduleMeeting}
                  disabled={!meetingDetails.name || !meetingDetails.email}
                  className="bg-blue-600 hover:bg-blue-700 h-10 sm:h-11 px-4 sm:px-6 text-sm sm:text-base"
                >
                  Schedule Meeting
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
