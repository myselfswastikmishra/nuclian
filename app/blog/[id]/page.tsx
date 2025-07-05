import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, Share2, BookmarkPlus, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { RelatedPosts } from "@/components/blog/related-posts"
import { AuthorBio } from "@/components/blog/author-bio"

// This would typically come from a database or CMS
async function getBlogPost(id: string) {
  // Mock data - in real app, fetch from database
  return {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: `
      <p>The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and interact with web applications.</p>
      
      <h2>1. AI Integration Becomes Standard</h2>
      <p>Artificial Intelligence is no longer a luxury feature—it's becoming an essential component of modern web applications. From chatbots to personalized content recommendations, AI is enhancing user experiences across the board.</p>
      
      <h3>Key AI Applications in Web Development:</h3>
      <ul>
        <li>Intelligent content generation and curation</li>
        <li>Advanced search and recommendation systems</li>
        <li>Automated testing and code optimization</li>
        <li>Real-time language translation</li>
      </ul>
      
      <h2>2. Progressive Web Apps (PWAs) Gain Momentum</h2>
      <p>PWAs continue to bridge the gap between web and native applications, offering app-like experiences directly through web browsers. With improved offline capabilities and push notifications, PWAs are becoming increasingly attractive to businesses looking to reduce development costs while maintaining high-quality user experiences.</p>
      
      <h2>3. Edge Computing Revolution</h2>
      <p>Edge computing is transforming how we think about web application architecture. By processing data closer to users, edge computing reduces latency and improves performance, especially for real-time applications.</p>
      
      <h2>4. WebAssembly (WASM) Expansion</h2>
      <p>WebAssembly is opening new possibilities for web applications, allowing developers to run high-performance code written in languages like C++, Rust, and Go directly in the browser.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of opportunities. By staying informed about these trends and continuously learning new technologies, developers can create more powerful, efficient, and user-friendly web applications.</p>
    `,
    author: "Alex Thompson",
    authorBio:
      "Full-stack developer with 8+ years of experience in building scalable web applications. Passionate about emerging technologies and best practices.",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "AI", "Trends", "PWA", "WebAssembly"],
    image: "/placeholder.svg?height=400&width=800",
    likes: 42,
    shares: 18,
  }
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id)

  return (
    <div className="min-h-screen py-20">
      {/* Back Button */}
      <div className="px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-700">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">{post.category}</Badge>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <img
                src={post.authorImage || "/placeholder.svg"}
                alt={post.author}
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              <ThumbsUp className="h-4 w-4 mr-2" />
              {post.likes} Likes
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              <BookmarkPlus className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <AuthorBio name={post.author} bio={post.authorBio} image={post.authorImage} />

      {/* Related Posts */}
      <RelatedPosts currentPostId={post.id} category={post.category} />

      {/* Newsletter CTA */}
      <section className="px-4 py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Enjoyed This Article?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for more insights and industry updates.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </div>
  )
}
