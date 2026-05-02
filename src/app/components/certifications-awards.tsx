import { ArrowUpRightIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Certifications = (typeof RESUME_DATA)["certifications"];
type Awards = (typeof RESUME_DATA)["awards"];

interface CertificationItemProps {
  title: string;
  issuer: string;
  url?: string;
}

function CertificationItem({ title, issuer, url }: CertificationItemProps) {
  const titleContent = url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-start gap-1 text-foreground hover:text-foreground/80"
      aria-label={`${title} — verify credential (opens in new tab)`}
    >
      <span className="underline decoration-border decoration-dotted underline-offset-4 group-hover:decoration-foreground/50">
        {title}
      </span>
      <ArrowUpRightIcon
        className="mt-[1px] size-3 shrink-0 text-foreground/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground/70"
        aria-hidden="true"
      />
    </a>
  ) : (
    <span>{title}</span>
  );

  return (
    <li className="flex flex-col gap-0.5 border-l border-muted pl-3">
      <span className="text-sm font-medium leading-snug print:text-[12px]">
        {titleContent}
      </span>
      <span className="font-mono text-xs text-foreground/60 print:text-[10px]">
        {issuer}
      </span>
    </li>
  );
}

interface AwardItemProps {
  title: string;
  issuer: string;
  year: string;
}

function AwardItem({ title, issuer, year }: AwardItemProps) {
  return (
    <li className="flex flex-col gap-0.5 border-l border-muted pl-3">
      <div className="flex items-start justify-between gap-x-2">
        <span className="text-sm font-medium leading-snug print:text-[12px]">
          {title}
        </span>
        <span className="font-mono text-xs tabular-nums text-foreground/60 print:text-[10px]">
          {year}
        </span>
      </div>
      <span className="font-mono text-xs text-foreground/60 print:text-[10px]">
        {issuer}
      </span>
    </li>
  );
}

interface CertificationsAndAwardsProps {
  certifications: Certifications;
  awards: Awards;
}

export function CertificationsAndAwards({
  certifications,
  awards,
}: CertificationsAndAwardsProps) {
  if (certifications.length === 0 && awards.length === 0) {
    return null;
  }

  return (
    <Section>
      <h2 className="text-xl font-bold" id="certs-awards-section">
        Certifications & Awards
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 print:grid-cols-2 print:gap-4">
        {certifications.length > 0 && (
          <div className="flex flex-col gap-2">
            <h3
              className="font-mono text-[11px] uppercase tracking-wider text-foreground/60 print:text-[9px]"
              id="certifications-subsection"
            >
              <span aria-hidden="true" className="text-foreground/40">
                ›{" "}
              </span>
              Certifications
            </h3>
            <ul
              className="flex list-none flex-col gap-3 p-0 print:gap-1.5"
              aria-labelledby="certifications-subsection"
            >
              {certifications.map((cert) => (
                <CertificationItem
                  key={cert.title}
                  title={cert.title}
                  issuer={cert.issuer}
                  url={cert.url}
                />
              ))}
            </ul>
          </div>
        )}

        {awards.length > 0 && (
          <div className="flex flex-col gap-2">
            <h3
              className="font-mono text-[11px] uppercase tracking-wider text-foreground/60 print:text-[9px]"
              id="awards-subsection"
            >
              <span aria-hidden="true" className="text-foreground/40">
                ›{" "}
              </span>
              Awards
            </h3>
            <ul
              className="flex list-none flex-col gap-3 p-0 print:gap-1.5"
              aria-labelledby="awards-subsection"
            >
              {awards.map((award) => (
                <AwardItem
                  key={award.title}
                  title={award.title}
                  issuer={award.issuer}
                  year={award.year}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
