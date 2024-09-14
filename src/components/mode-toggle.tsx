"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export function ModeToggle() {
  const t = useTranslations();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="aspect-square px-2 hover:bg-accent/80 size-12 group"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <div className="aspect-square size-12 flex items-center justify-center">
              <SunIcon className="size-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
              <MoonIcon className="hidden size-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("sections.theme")}</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
}
