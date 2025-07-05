import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

interface RelatedPostsProps {
  currentPostId: string
  category: string
}

export function RelatedPosts({ currentPostId, category }: RelatedPostsProps) {
  // Mock related posts - in real app, fetch from database
  const relatedPosts = [
    {
      id: "2",
      title: "Building Scalable Mobile Apps with React Native",
      excerpt: "Learn best practices for creating performant mobile applications.",
      author: "Sarah Kim",
      date: "Jan 12, 2024", // Changed format
      readTime: "6 min read",
      category: "Mobile Development",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      title: "DevOps Best Practices for Small Teams",
      excerpt: "Implement effective DevOps practices without overwhelming complexity.",
      author: "Michael Rodriguez",
      date: "Jan 10, 2024", // Changed format
      readTime: "10 min read",
      category: "DevOps",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "4",
      title: "AI-Powered Design: How ML is Changing UX",
      excerpt: "Explore how AI is revolutionizing user experience design.",
      author: "Emily Chen",
      date: "Jan 8, 2024", // Changed format
      readTime: "7 min read",
      category: "Design",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="px-4 mb-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow border-blue-100 group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{post.category}</Badge>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                  <Link href={`/blog/${post.id}`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
