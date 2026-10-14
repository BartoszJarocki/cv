import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { GitHubIcon } from "@/components/icons/github-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { XIcon } from "@/components/icons/x-icon";
import { RESUME_DATA } from "@/data/resume-data";
import {
  type ContactIcon,
  type ContactLink,
  getContactLinks,
} from "@/lib/resume";

const ICON_MAP: Record<
  ContactIcon,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  globe: GlobeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
};

interface LocationLinkProps {
  location: string;
  locationLink: string;
}

function LocationLink({ location, locationLink }: LocationLinkProps) {
  return (
    <p className="max-w-md items-center text-pretty text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${location}`}
      >
        <GlobeIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  iconType: ContactIcon;
  label: string;
}

function SocialButton({ href, iconType, label }: SocialButtonProps) {
  const IconComponent = ICON_MAP[iconType];

  return (
    <a
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconComponent className="size-4" aria-hidden="true" />
    </a>
  );
}

interface ContactLinksProps {
  links: ContactLink[];
}

function ContactButtons({ links }: ContactLinksProps) {
  return (
    <ul
      className="flex list-none gap-x-1 pt-1 text-sm text-foreground/80 print:hidden"
      aria-label="Contact links"
    >
      {links.map(({ href, label, icon }) => (
        <li key={label}>
          <SocialButton href={href} iconType={icon} label={label} />
        </li>
      ))}
    </ul>
  );
}

function PrintContact({ links }: ContactLinksProps) {
  return (
    <div className="hidden flex-wrap gap-x-2 text-sm text-foreground/80 print:flex print:text-[12px] print:leading-tight">
      {links.map(({ label, href, text }, index) => (
        <span key={label} className="inline-flex gap-x-2">
          <a className="underline hover:text-foreground/70" href={href}>
            {text}
          </a>
          {index < links.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const contactLinks = getContactLinks(RESUME_DATA);

  return (
    <header className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5 print:space-y-1">
        <h1
          className="font-pixel text-[28px] leading-none sm:text-[32px]"
          id="resume-name"
        >
          {RESUME_DATA.name}
        </h1>
        <p className="max-w-md text-pretty text-sm text-foreground/80 print:text-[12px] print:leading-tight">
          {RESUME_DATA.about}
        </p>

        <LocationLink
          location={RESUME_DATA.location}
          locationLink={RESUME_DATA.locationLink}
        />

        <ContactButtons links={contactLinks} />

        <PrintContact links={contactLinks} />
      </div>

      <Image
        className="size-28 shrink-0 rounded-xl bg-muted object-cover ring-1 ring-muted"
        src={RESUME_DATA.avatar}
        alt={`${RESUME_DATA.name}'s profile picture`}
        width={112}
        height={112}
        preload={true}
      />
    </header>
  );
}
