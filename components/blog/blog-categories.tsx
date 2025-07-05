import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function BlogCategories() {
  const categories = [
    { name: "All", count: 24, active: true },
    { name: "Web Development", count: 8, active: false },
    { name: "Mobile Development", count: 5, active: false },
    { name: "Design", count: 4, active: false },
    { name: "DevOps", count: 3, active: false },
    { name: "AI & Automation", count: 2, active: false },
    { name: "Industry Insights", count: 2, active: false },
  ]

  return (
    <section className="px-4 mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`${
                category.active
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-blue-200 text-gray-600 hover:bg-blue-50"
              }`}
            >
              {category.name}
              <Badge
                variant="secondary"
                className={`ml-2 ${category.active ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
