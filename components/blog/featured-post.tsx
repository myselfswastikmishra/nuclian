import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

interface FeaturedPostProps {
  post: {
    id: string
    title: string
    excerpt: string
    author: string
    date: string
    readTime: string
    category: string
    tags: string[]
    image: string
  }
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="px-4 mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 text-white">
              <Badge className="mb-4 bg-blue-500 text-white hover:bg-blue-400">Featured Article</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">{post.title}</h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center text-blue-200 mb-6">
                <User className="h-4 w-4 mr-2" />
                <span className="mr-6">{post.author}</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span className="mr-6">{post.date}</span>
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-500 text-white hover:bg-blue-400">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href={`/blog/${post.id}`}>
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative lg:block">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent lg:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
