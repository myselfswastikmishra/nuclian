"use client"

import { useState, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, Settings } from "lucide-react"
import Link from "next/link"
import { BlogSearch } from "@/components/blog/blog-search"
import { FeaturedPost } from "@/components/blog/featured-post"
import { AdminLogin } from "@/components/blog/admin-login"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured?: boolean
}

export default function BlogPage() {
  const [showAdminLogin, setShowAdminLogin] = useState(false)

  // Memoize the blog posts to prevent unnecessary re-renders
  const allBlogPosts: BlogPost[] = useMemo(
    () => [
      {
        id: "1",
        title: "The Future of Web Development: Trends to Watch in 2024",
        excerpt:
          "Explore the latest trends shaping web development, from AI integration to progressive web apps and the rise of edge computing.",
        author: "Alex Thompson",
        date: "Jan 15, 2024",
        readTime: "8 min read",
        category: "Web Development",
        tags: ["React", "AI", "Trends", "PWA", "Edge Computing"],
        image: "/placeholder.svg?height=300&width=500",
        featured: true,
      },
      {
        id: "2",
        title: "Building Scalable Mobile Apps with React Native",
        excerpt:
          "Learn best practices for creating performant and scalable mobile applications using React Native and modern development patterns.",
        author: "Sarah Kim",
        date: "Jan 12, 2024",
        readTime: "6 min read",
        category: "Mobile Development",
        tags: ["React Native", "Mobile", "Performance", "Scalability", "Cross-platform"],
        image: "/placeholder.svg?height=300&width=500",
        featured: false,
      },
      {
        id: "3",
        title: "DevOps Best Practices for Small Teams",
        excerpt:
          "Discover how small development teams can implement effective DevOps practices without overwhelming complexity.",
        author: "Michael Rodriguez",
        date: "Jan 10, 2024",
        readTime: "10 min read",
        category: "DevOps",
        tags: ["DevOps", "CI/CD", "Docker", "Automation", "Small Teams"],
        image: "/placeholder.svg?height=300&width=500",
        featured: false,
      },
      {
        id: "4",
        title: "AI-Powered Design: How Machine Learning is Changing UX",
        excerpt:
          "Explore how artificial intelligence is revolutionizing user experience design and creating more personalized interfaces.",
        author: "Emily Chen",
        date: "Jan 8, 2024",
        readTime: "7 min read",
        category: "Design",
        tags: ["AI", "UX Design", "Machine Learning", "Personalization", "UI"],
        image: "/placeholder.svg?height=300&width=500",
        featured: false,
      },
      {
        id: "5",
        title: "Data Security in the Cloud: Essential Practices",
        excerpt:
          "Learn about critical security measures every business should implement when moving their data to the cloud.",
        author: "Alex Thompson",
        date: "Jan 5, 2024",
        readTime: "9 min read",
        category: "Security",
        tags: ["Security", "Cloud", "Data Protection", "Best Practices", "Compliance"],
        image: "/placeholder.svg?height=300&width=500",
        featured: false,
      },
      {
        id: "6",
        title: "The Rise of No-Code Solutions: Opportunities and Limitations",
        excerpt: "Analyzing the growing no-code movement and its impact on traditional software development practices.",
        author: "Sarah Kim",
        date: "Jan 3, 2024",
        readTime: "5 min read",
        category: "Industry Insights",
        tags: ["No-Code", "Automation", "Business Tools", "Innovation", "Low-Code"],
        image: "/placeholder.svg?height=300&width=500",
        featured: false,
      },
    ],
    [],
  )

  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allBlogPosts)

  // Memoize the featured post and display posts
  const featuredPost = useMemo(() => allBlogPosts.find((post) => post.featured), [allBlogPosts])
  const displayPosts = useMemo(() => filteredPosts.filter((post) => !post.featured), [filteredPosts])

  // Stable callback function to prevent infinite re-renders
  const handleFilteredPosts = useCallback((posts: BlogPost[]) => {
    setFilteredPosts(posts)
  }, [])

  if (showAdminLogin) {
    return <AdminLogin onBack={() => setShowAdminLogin(false)} />
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            <div className="text-center flex-1">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Nuclian Blog</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Insights & Industry Expertise</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Stay updated with the latest trends, best practices, and insights from our team of experts in web
                development, mobile apps, AI, and digital transformation.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAdminLogin(true)}
              className="text-gray-400 hover:text-gray-600 ml-4"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <BlogSearch posts={allBlogPosts} onFilteredPosts={handleFilteredPosts} />
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && <FeaturedPost post={featuredPost} />}

      {/* Blog Posts Grid */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          {displayPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all articles.</p>
              <Button
                variant="outline"
                onClick={() => setFilteredPosts(allBlogPosts)}
                className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Show All Articles
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {displayPosts.length === allBlogPosts.length - 1 ? "Latest Articles" : "Search Results"}
                </h2>
                <span className="text-gray-600">
                  Showing {displayPosts.length} article{displayPosts.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayPosts.map((post) => (
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
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
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
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                            +{post.tags.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                        <Link href={`/blog/${post.id}`}>
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
