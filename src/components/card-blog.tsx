"use client";

import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";

const BLUR_FADE_DELAY = 0.04;

export default function CardBlog({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <MagicCard
      className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      {children}
    </MagicCard>
  );
}
