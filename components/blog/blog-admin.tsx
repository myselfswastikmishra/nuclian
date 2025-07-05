"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, Edit, Trash2, Save, X, LogOut } from "lucide-react"

interface BlogAdminProps {
  onLogout: () => void
  onBack: () => void
}

export function BlogAdmin({ onLogout, onBack }: BlogAdminProps) {
  const [activeTab, setActiveTab] = useState<"list" | "create" | "edit">("list")
  const [editingPost, setEditingPost] = useState<any>(null)
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    tags: "",
    featured: false,
  })

  const mockPosts = [
    {
      id: "1",
      title: "The Future of Web Development: Trends to Watch in 2024",
      author: "Alex Thompson",
      date: "Jan 15, 2024", // Changed format
      category: "Web Development",
      featured: true,
      status: "Published",
    },
    {
      id: "2",
      title: "Building Scalable Mobile Apps with React Native",
      author: "Sarah Kim",
      date: "Jan 12, 2024", // Changed format
      category: "Mobile Development",
      featured: false,
      status: "Published",
    },
    {
      id: "3",
      title: "DevOps Best Practices for Small Teams",
      author: "Michael Rodriguez",
      date: "Jan 10, 2024", // Changed format
      category: "DevOps",
      featured: false,
      status: "Draft",
    },
  ]

  const categories = ["Web Development", "Mobile Development", "Design", "DevOps", "Security", "Industry Insights"]

  const handleCreatePost = () => {
    console.log("Creating post:", newPost)
    // In a real app, this would save to a database
    setNewPost({
      title: "",
      excerpt: "",
      content: "",
      author: "",
      category: "",
      tags: "",
      featured: false,
    })
    setActiveTab("list")
  }

  const handleEditPost = (post: any) => {
    setEditingPost(post)
    setActiveTab("edit")
  }

  const handleDeletePost = (postId: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      console.log("Deleting post:", postId)
      // In a real app, this would delete from database
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Blog Administration</h1>
          </div>
          <Button variant="outline" onClick={onLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8">
          <Button
            variant={activeTab === "list" ? "default" : "outline"}
            onClick={() => setActiveTab("list")}
            className={activeTab === "list" ? "bg-blue-600" : ""}
          >
            All Posts
          </Button>
          <Button
            variant={activeTab === "create" ? "default" : "outline"}
            onClick={() => setActiveTab("create")}
            className={activeTab === "create" ? "bg-blue-600" : ""}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Post
          </Button>
        </div>

        {/* Posts List */}
        {activeTab === "list" && (
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>All Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{post.title}</h3>
                        {post.featured && <Badge className="bg-blue-600">Featured</Badge>}
                        <Badge variant={post.status === "Published" ? "default" : "secondary"}>{post.status}</Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        By {post.author} • {post.date} • {post.category}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditPost(post)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDeletePost(post.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Create Post */}
        {activeTab === "create" && (
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Create New Post</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <Input
                    value={newPost.title}
                    onChange={(e) => setNewPost((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter post title"
                    className="border-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                  <Input
                    value={newPost.author}
                    onChange={(e) => setNewPost((prev) => ({ ...prev, author: e.target.value }))}
                    placeholder="Author name"
                    className="border-blue-200"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <Select
                    value={newPost.category}
                    onValueChange={(value) => setNewPost((prev) => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger className="border-blue-200">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                  <Input
                    value={newPost.tags}
                    onChange={(e) => setNewPost((prev) => ({ ...prev, tags: e.target.value }))}
                    placeholder="Enter tags separated by commas"
                    className="border-blue-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                <Textarea
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost((prev) => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief description of the post"
                  rows={3}
                  className="border-blue-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <Textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost((prev) => ({ ...prev, content: e.target.value }))}
                  placeholder="Write your post content here..."
                  rows={10}
                  className="border-blue-200"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newPost.featured}
                    onChange={(e) => setNewPost((prev) => ({ ...prev, featured: e.target.checked }))}
                    className="mr-2"
                  />
                  Featured Post
                </label>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleCreatePost} className="bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4 mr-2" />
                  Publish Post
                </Button>
                <Button variant="outline" onClick={() => setActiveTab("list")}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Edit Post */}
        {activeTab === "edit" && editingPost && (
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Edit Post: {editingPost.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Edit functionality would be implemented here with the same form as create post, pre-populated with
                existing data.
              </p>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => setActiveTab("list")}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
