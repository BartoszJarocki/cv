import { RESUME_DATA } from "@/data/resume-data";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "../ui/button";

export const Personal = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
        <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
          {RESUME_DATA.about}
        </p>
        <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
          <a
            className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
            href={RESUME_DATA.locationLink}
            target="_blank"
          >
            <GlobeIcon className="h-3 w-3" />
            {RESUME_DATA.location}
          </a>
        </p>
        <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
          {RESUME_DATA.contact.email ? (
            <Button className="h-8 w-8" variant="outline" size="icon" asChild>
              <a href={`mailto:${RESUME_DATA.contact.email}`}>
                <MailIcon className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
          {RESUME_DATA.contact.tel ? (
            <Button className="h-8 w-8" variant="outline" size="icon" asChild>
              <a href={`tel:${RESUME_DATA.contact.tel}`}>
                <PhoneIcon className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
          {RESUME_DATA.contact.social.map((social) => (
            <Button
              key={social.name}
              className="h-8 w-8"
              variant="outline"
              size="icon"
              asChild
            >
              <a href={social.url}>
                <social.icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
        <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
          {RESUME_DATA.contact.email ? (
            <a href={`mailto:${RESUME_DATA.contact.email}`}>
              <span className="underline">{RESUME_DATA.contact.email}</span>
            </a>
          ) : null}
          {RESUME_DATA.contact.tel ? (
            <a href={`tel:${RESUME_DATA.contact.tel}`}>
              <span className="underline">{RESUME_DATA.contact.tel}</span>
            </a>
          ) : null}
        </div>
      </div>

      <Avatar className="h-28 w-28">
        <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
      </Avatar>
    </div>
  );
};
