import { RESUME_DATA } from "@/data/resume-data";
import { getCurrentRole } from "@/lib/resume";

export function generateResumeStructuredData() {
  const {
    name,
    about,
    avatar,
    siteUrl,
    personalWebsiteUrl,
    contact,
    work,
    education,
    skills,
  } = RESUME_DATA;
  const currentRole = getCurrentRole(work);

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${name} - Professional Resume`,
    description: `Professional resume and portfolio of ${name}, ${about}`,
    url: siteUrl,
    mainEntity: {
      "@type": "Person",
      name,
      description: about,
      url: siteUrl,
      image: new URL(avatar.src, siteUrl).href,
      sameAs: [
        ...(personalWebsiteUrl ? [personalWebsiteUrl] : []),
        ...contact.social.map(({ url }) => url),
      ],
      jobTitle: currentRole?.title,
      worksFor: currentRole && {
        "@type": "Organization",
        name: currentRole.company,
        url: currentRole.link,
      },
      alumniOf: education.map(({ school }) => ({
        "@type": "EducationalOrganization",
        name: school,
      })),
      knowsAbout: skills,
    },
  };
}
