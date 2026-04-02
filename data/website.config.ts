export interface SocialMediaLink {
  name: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  profilePicture?: string;
  role: string;
  university: string;
  universityWebsite: string;
  socialMedia: SocialMediaLink[];
}

export interface WebsiteInfo {
  title: string;
  description: string;
}

export interface NavigationItem {
  name: string;
  route: string;
}

export interface HomepageSection {
  AboutSection?: boolean;
  NewsSection?: boolean;
  SelectedPublicationsSection?: boolean;
  ProjectSection?: boolean;
}

export type FontStyle = "sans" | "serif" | "mono";

export const personalInfo: PersonalInfo = {
  name: "Matthew Vandergrift",
  profilePicture: "/headshot.jpg", //optional
  role: "Graduate Student",
  university: "RLAI at University of Alberta",
  universityWebsite: "http://rlai.ualberta.ca",
  socialMedia: [
    { name: "Linkedin", url: "https://www.linkedin.com/in/matthew-vandergrift-10992428b/" },
    { name: "BlueSky", url: "https://bsky.app/profile/matt-sl2z.bsky.social" },
    {
      name: "GitHub",
      url: "https://github.com/Matthew-Vandergrift",
    },
    { name: "Google Scholar", url: "https://scholar.google.ca/citations?user=y7VZxgUAAAAJ&hl=en" },
  ],
};

export const websiteInfo: WebsiteInfo = {
  title: personalInfo.name,
  description: "RL researcher",
};

export const navigations: NavigationItem[] = [
  { name: "Projects", route: "/projects" },
  { name: "Publications", route: "/publications" },
  { name: "News", route: "/news" },
  { name: "CV", route: "/cv/mvandergrift_cv_2026.pdf" },
]

export const homepageSection: HomepageSection = {
  AboutSection: true,
  NewsSection: true,
  SelectedPublicationsSection: false,
  // ProjectSection: true,
};

export const fontStyle: FontStyle = "sans"; // "sans" | "serif" | "mono"
