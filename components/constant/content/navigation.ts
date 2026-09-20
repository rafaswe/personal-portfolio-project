// Content data. Extracted from the former components/constant/enum.ts,
// which held page copy rather than enums.

// Activity bar, explorer/tab entries and the terminal's panel labels.

export const menuProperties = [
  { id: 0, image: "file", altText: "File", link: "/" },
  { id: 1, image: "searchIcon", altText: "Achievements", link: "/search" },
  {
    id: 2,
    image: "merge",
    altText: "Combined projects(Office/partnership)",
    link: "/projects",
  },
  { id: 4, image: "github", altText: "Github preview", link: "/gitHub" },
  { id: 5, image: "blog", altText: "Blogs written by me", link: "/blogs" },
  { id: 6, image: "contact", altText: "contact information", link: "/contact" },
  { id: 7, image: "profile", altText: "profileInfo", link: "/about" },
  { id: 8, image: "settings", altText: "Settings section", link: "" },
];

export const sideMenuProperties = [
  { id: 0, icon: "JS", text: "home.js", pageLink: "/" },
  { id: 1, icon: "TS", text: "search.ts", pageLink: "/search" },
  { id: 2, icon: "html", text: "about.html", pageLink: "/about" },
  { id: 3, icon: "css", text: "contact.css", pageLink: "/contact" },
  { id: 4, icon: "tsx", text: "projects.tsx", pageLink: "/projects" },
  { id: 6, icon: "json", text: "blogs.json", pageLink: "/blogs" },
  { id: 7, icon: "md", text: "gitHub.md", pageLink: "/gitHub" },
];

export const ListOfTerminalMenu = [
  "PROBLEMS",
  "OUTPUT",
  "DEBUG CONSOLE",
  "TERMINAL",
  "GITLENS",
];
