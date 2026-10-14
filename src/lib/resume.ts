import type { ResumeData, SocialIcon, WorkEntry } from "@/lib/types";

export type ContactIcon = SocialIcon | "globe" | "mail" | "phone";

export interface ContactLink {
  label: string;
  href: string;
  text: string;
  icon: ContactIcon;
}

export function getCurrentRole(work: WorkEntry[]): WorkEntry | undefined {
  return work.find((job) => job.end === null);
}

export function getPageTitle({ name, work }: ResumeData): string {
  return `${name} - ${getCurrentRole(work)?.title ?? "Resume"}`;
}

function displayUrl(url: string): string {
  const { host, pathname } = new URL(url);
  const path = decodeURI(pathname).replace(/\/$/, "");
  return `${host.replace(/^www\./, "")}${path}`;
}

export function getContactLinks({
  personalWebsiteUrl,
  contact,
}: ResumeData): ContactLink[] {
  const links: ContactLink[] = [];
  if (personalWebsiteUrl) {
    links.push({
      label: "Personal Website",
      href: personalWebsiteUrl,
      text: displayUrl(personalWebsiteUrl),
      icon: "globe",
    });
  }
  if (contact.email) {
    links.push({
      label: "Email",
      href: `mailto:${contact.email}`,
      text: contact.email,
      icon: "mail",
    });
  }
  if (contact.tel) {
    links.push({
      label: "Phone",
      href: `tel:${contact.tel}`,
      text: contact.tel,
      icon: "phone",
    });
  }
  for (const social of contact.social) {
    links.push({
      label: social.name,
      href: social.url,
      text: displayUrl(social.url),
      icon: social.icon,
    });
  }
  return links;
}
