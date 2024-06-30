export interface Site {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
}

export interface SocialObject {
  href: string;
  active: boolean;
  linkTitle: string;
  name: string;
}
