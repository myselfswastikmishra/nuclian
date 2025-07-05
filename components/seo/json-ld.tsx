export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nuclian",
    description:
      "Professional freelance software development agency specializing in web development, mobile apps, AI automation, and digital solutions.",
    url: "https://nuclian.com",
    logo: "https://nuclian.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "hello@nuclian.com",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Global",
      addressRegion: "Remote",
      addressCountry: "Worldwide",
    },
    sameAs: ["https://twitter.com/nuclian", "https://linkedin.com/company/nuclian", "https://github.com/nuclian"],
    foundingDate: "2019",
    numberOfEmployees: "10-50",
    industry: "Software Development",
    services: [
      "Web Development",
      "Mobile App Development",
      "AI Automation",
      "Cloud Solutions",
      "DevOps Services",
      "Digital Transformation",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nuclian",
    url: "https://nuclian.com",
    description: "Professional freelance software development agency",
    publisher: {
      "@type": "Organization",
      name: "Nuclian",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://nuclian.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Software Development Services",
    description:
      "Comprehensive software development services including web development, mobile apps, AI automation, and digital solutions.",
    provider: {
      "@type": "Organization",
      name: "Nuclian",
    },
    serviceType: "Software Development",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  )
}
