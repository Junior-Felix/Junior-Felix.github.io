import type { Site, SocialObject } from "./types";

export const SITE: Site = {
  website: "",
  author: "Junior Felix",
  desc: "Junior Felix's personal website",
  title: "Felix",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000,
};

export const SOCIALS: Array<SocialObject> = [
  {
    name: "Github",
    href: "https://github.com/Junior-Felix",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Medium",
    href: "https://medium.com/@junior-felix",
    linkTitle: `${SITE.title} on Medium`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/junior-felix/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
