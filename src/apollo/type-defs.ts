import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Social {
  @Field(() => String)
  name: string;

  @Field(() => String)
  url: string;
}

@ObjectType()
export class Contact {
  @Field(() => String)
  email: string;

  @Field(() => String)
  tel: string;

  @Field(() => [Social])
  social: Social[];
}

@ObjectType()
export class Education {
  @Field(() => String)
  school: string;

  @Field(() => String)
  degree: string;

  @Field(() => String)
  start: string;

  @Field(() => String)
  end: string;
}

@ObjectType()
export class Work {
  @Field(() => String)
  company: string;

  @Field(() => String)
  link: string;

  @Field(() => [String])
  badges: string[];

  @Field(() => String)
  title: string;

  @Field(() => String)
  start: string;

  @Field(() => String)
  end: string;

  @Field(() => String)
  description: string;
}

@ObjectType()
export class Link {
  @Field(() => String)
  label: string;

  @Field(() => String)
  href: string;
}

@ObjectType()
export class Project {
  @Field(() => String)
  title: string;

  @Field(() => [String])
  techStack: string[];

  @Field(() => String)
  description: string;

  @Field(() => Link, { nullable: true })
  link?: Link;
}

@ObjectType()
export class Me {
  @Field(() => String)
  name: string;

  @Field(() => String)
  initials: string;

  @Field(() => String)
  location: string;

  @Field(() => String)
  locationLink: string;

  @Field(() => String)
  about: string;

  @Field(() => String)
  summary: string;

  @Field(() => String)
  avatarUrl: string;

  @Field(() => String)
  personalWebsiteUrl: string;

  @Field(() => Contact)
  contact: Contact;

  @Field(() => [Education])
  education: Education[];

  @Field(() => [Work])
  work: Work[];

  @Field(() => [String])
  skills: string[];

  @Field(() => [Project])
  projects: Project[];
}
