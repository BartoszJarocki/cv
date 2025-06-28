import { RESUME_DATA } from "@/data/resume-data";

export function generatePersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME_DATA.name,
    alternateName: RESUME_DATA.initials,
    description: RESUME_DATA.about,
    url: RESUME_DATA.personalWebsiteUrl,
    image: RESUME_DATA.avatarUrl,
    sameAs: RESUME_DATA.contact.social.map((social) => social.url),
    address: {
      "@type": "Place",
      name: RESUME_DATA.location,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: RESUME_DATA.contact.email,
      telephone: RESUME_DATA.contact.tel,
      contactType: "personal",
    },
    jobTitle: "Full Stack Engineer",
    worksFor:
      RESUME_DATA.work.length > 0
        ? {
            "@type": "Organization",
            name: RESUME_DATA.work[0].company,
            url: RESUME_DATA.work[0].link,
          }
        : undefined,
    alumniOf: RESUME_DATA.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.school,
    })),
    hasOccupation: RESUME_DATA.work.map((job) => ({
      "@type": "Occupation",
      name: job.title,
      occupationLocation: {
        "@type": "Place",
        name: RESUME_DATA.location,
      },
      occupationalCategory: "Software Engineering",
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        name: "Professional software engineer",
      },
    })),
    knowsAbout: RESUME_DATA.skills,
  };
}

export function generateWebPageStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    url: "https://cv.jarocki.me",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: `${RESUME_DATA.name}'s Professional Resume`,
      url: "https://cv.jarocki.me",
    },
    about: {
      "@type": "Person",
      name: RESUME_DATA.name,
    },
    mainEntity: generatePersonStructuredData(),
  };
}

export function generateResumeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: generatePersonStructuredData(),
    about: generatePersonStructuredData(),
    name: `${RESUME_DATA.name} - Professional Resume`,
    description: `Professional resume and portfolio of ${RESUME_DATA.name}, ${RESUME_DATA.about}`,
    url: "https://cv.jarocki.me",
  };
}
