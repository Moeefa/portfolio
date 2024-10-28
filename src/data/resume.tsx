import { HomeIcon, NotebookIcon } from "lucide-react";

import { Icons } from "@/components/icons";

export const DATA = {
  name: "Luiz Xinaider",
  initials: "LH",
  url: "https://xinaider.vercel.app",
  location: "Cuiabá, Mato Grosso, Brazil",
  locationLink: "https://www.google.com/maps/place/cuiaba",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "TailwindCSS",
    "Electron",
    "Tauri",
    "Expo",
    "Node.js",
    "Python",
    "Rust",
    "Java",
    "C#",
    "Unity",
    "Postgres",
    "jQuery",
    "Prisma",
  ],
  contact: {
    email: "moeefa@protonmail.com",
    social: {
      Discord: {
        name: "Discord",
        url: "https://discord.com/channels/@me/482224256730791967",
        icon: Icons.discord,

        navbar: false,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Moeefa",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/xinaider/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Twitter: {
        name: "Twitter/X",
        url: "https://twitter.com/ItsMoeefa",
        icon: Icons.twitter,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:moeefa@protonmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },
} as const;
