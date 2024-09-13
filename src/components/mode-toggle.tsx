"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2 hover:bg-accent/80 size-12 group"
      data-theme={theme === "dark" ? "dark" : "light"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="group-hover:group-data-[theme=light]:rotate-90 transition-transform duration-300">
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
        <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
      </div>
    </Button>
  );
}
