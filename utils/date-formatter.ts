export function formatDate(dateString: string): string {
  try {
    // If it's already in a readable format, return as is
    if (dateString.includes(",") || dateString.includes(" ")) {
      return dateString
    }

    // If it's in ISO format, convert it
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      return dateString // Return original if invalid
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  } catch {
    return dateString // Return original on error
  }
}

export function isValidDate(dateString: string): boolean {
  try {
    const date = new Date(dateString)
    return !isNaN(date.getTime())
  } catch {
    return false
  }
}
