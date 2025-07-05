import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Github } from "lucide-react"

interface AuthorBioProps {
  name: string
  bio: string
  image: string
}

export function AuthorBio({ name, bio, image }: AuthorBioProps) {
  return (
    <section className="px-4 mb-16">
      <div className="max-w-4xl mx-auto">
        <Card className="border-blue-100">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={image || "/placeholder.svg"}
                alt={name}
                className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">About {name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{bio}</p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
