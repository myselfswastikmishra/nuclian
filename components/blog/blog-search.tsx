"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Search, Filter, X, CalendarIcon, SortAsc, SortDesc, User, Tag } from "lucide-react"
import { format } from "date-fns"

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

interface BlogSearchProps {
  posts: BlogPost[]
  onFilteredPosts?: (posts: BlogPost[]) => void
}

export function BlogSearch({ posts, onFilteredPosts }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedAuthor, setSelectedAuthor] = useState("all")
  const [sortBy, setSortBy] = useState("date-desc")
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: undefined,
    to: undefined,
  })
  const [showFilters, setShowFilters] = useState(false)

  // Extract unique values for filter options
  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map((post) => post.category)))
    return cats.sort()
  }, [posts])

  const authors = useMemo(() => {
    const auths = Array.from(new Set(posts.map((post) => post.author)))
    return auths.sort()
  }, [posts])

  const allTags = useMemo(() => {
    const tags = Array.from(new Set(posts.flatMap((post) => post.tags)))
    return tags.sort()
  }, [posts])

  // Filter and search logic
  const filteredPosts = useMemo(() => {
    let filtered = [...posts]

    // Text search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    // Author filter
    if (selectedAuthor !== "all") {
      filtered = filtered.filter((post) => post.author === selectedAuthor)
    }

    // Tags filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) => selectedTags.every((tag) => post.tags.includes(tag)))
    }

    // Date range filter
    if (dateRange.from || dateRange.to) {
      filtered = filtered.filter((post) => {
        try {
          // Handle both date formats safely
          const postDate = new Date(post.date)
          if (isNaN(postDate.getTime())) return true // Skip invalid dates
          if (dateRange.from && postDate < dateRange.from) return false
          if (dateRange.to && postDate > dateRange.to) return false
          return true
        } catch {
          return true // Include posts with invalid dates
        }
      })
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "title-asc":
          return a.title.localeCompare(b.title)
        case "title-desc":
          return b.title.localeCompare(a.title)
        case "author-asc":
          return a.author.localeCompare(b.author)
        case "author-desc":
          return b.author.localeCompare(a.author)
        default:
          return 0
      }
    })

    return filtered
  }, [posts, searchQuery, selectedCategory, selectedAuthor, selectedTags, dateRange, sortBy])

  // Stable callback to prevent infinite re-renders
  const stableOnFilteredPosts = useCallback(
    (posts: BlogPost[]) => {
      if (onFilteredPosts) {
        onFilteredPosts(posts)
      }
    },
    [onFilteredPosts],
  )

  // Update parent component with filtered results only when filteredPosts actually changes
  useEffect(() => {
    stableOnFilteredPosts(filteredPosts)
  }, [filteredPosts, stableOnFilteredPosts])

  const handleTagToggle = useCallback((tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }, [])

  const clearAllFilters = useCallback(() => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedTags([])
    setSelectedAuthor("all")
    setSortBy("date-desc")
    setDateRange({ from: undefined, to: undefined })
  }, [])

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "all" ||
    selectedTags.length > 0 ||
    selectedAuthor !== "all" ||
    dateRange.from ||
    dateRange.to ||
    sortBy !== "date-desc"

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="Search articles, authors, tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-3 text-lg border-blue-200 focus:border-blue-500"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchQuery("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
        >
          <Filter className="h-4 w-4 mr-2" />
          Advanced Filters
          {hasActiveFilters && <Badge className="ml-2 bg-blue-600 text-white text-xs">Active</Badge>}
        </Button>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {filteredPosts.length} of {posts.length} articles
          </span>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-gray-500 hover:text-gray-700">
              Clear All
            </Button>
          )}
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <Card className="border-blue-100">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-blue-200">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Author Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
                  <SelectTrigger className="border-blue-200">
                    <SelectValue placeholder="All Authors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Authors</SelectItem>
                    {authors.map((author) => (
                      <SelectItem key={author} value={author}>
                        {author}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="border-blue-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-desc">
                      <div className="flex items-center">
                        <SortDesc className="h-4 w-4 mr-2" />
                        Newest First
                      </div>
                    </SelectItem>
                    <SelectItem value="date-asc">
                      <div className="flex items-center">
                        <SortAsc className="h-4 w-4 mr-2" />
                        Oldest First
                      </div>
                    </SelectItem>
                    <SelectItem value="title-asc">
                      <div className="flex items-center">
                        <SortAsc className="h-4 w-4 mr-2" />
                        Title A-Z
                      </div>
                    </SelectItem>
                    <SelectItem value="title-desc">
                      <div className="flex items-center">
                        <SortDesc className="h-4 w-4 mr-2" />
                        Title Z-A
                      </div>
                    </SelectItem>
                    <SelectItem value="author-asc">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        Author A-Z
                      </div>
                    </SelectItem>
                    <SelectItem value="author-desc">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        Author Z-A
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal border-blue-200 bg-transparent"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateRange.from ? (
                        dateRange.to ? (
                          <>
                            {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(dateRange.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date range</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={dateRange.from}
                      selected={dateRange}
                      onSelect={(range) => setDateRange(range || { from: undefined, to: undefined })}
                      numberOfMonths={2}
                    />
                    <div className="p-3 border-t">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setDateRange({ from: undefined, to: undefined })}
                        className="w-full"
                      >
                        Clear Date Range
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Tags Filter */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <Tag className="inline h-4 w-4 mr-1" />
                Filter by Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "secondary"}
                    className={`cursor-pointer transition-colors ${
                      selectedTags.includes(tag)
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                    {selectedTags.includes(tag) && <X className="ml-1 h-3 w-3" />}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {searchQuery && (
            <Badge variant="outline" className="border-blue-200 text-blue-700">
              Search: "{searchQuery}"
              <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
            </Badge>
          )}
          {selectedCategory !== "all" && (
            <Badge variant="outline" className="border-blue-200 text-blue-700">
              Category: {selectedCategory}
              <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("all")} />
            </Badge>
          )}
          {selectedAuthor !== "all" && (
            <Badge variant="outline" className="border-blue-200 text-blue-700">
              Author: {selectedAuthor}
              <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => setSelectedAuthor("all")} />
            </Badge>
          )}
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-blue-200 text-blue-700">
              Tag: {tag}
              <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => handleTagToggle(tag)} />
            </Badge>
          ))}
          {(dateRange.from || dateRange.to) && (
            <Badge variant="outline" className="border-blue-200 text-blue-700">
              Date: {dateRange.from ? format(dateRange.from, "MMM dd") : "Start"} -{" "}
              {dateRange.to ? format(dateRange.to, "MMM dd") : "End"}
              <X
                className="ml-1 h-3 w-3 cursor-pointer"
                onClick={() => setDateRange({ from: undefined, to: undefined })}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
