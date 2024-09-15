"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  CustomSelectTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLocale, useTranslations } from "next-intl";

import { GlobeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useTheme } from "next-themes";

const DATA = [
  {
    value: "en-US",
    label: <Image src="/flags/en-US.svg" width={30} height={30} alt="en-US" />,
  },
  {
    value: "pt-BR",
    label: <Image src="/flags/pt-BR.svg" width={30} height={30} alt="pt-BR" />,
  },
];

let closeTimeout: NodeJS.Timeout;

export function LocaleToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations();

  const [open, setOpen] = useState(false);

  return (
    <Select
      value={DATA.find((item) => item.value === locale)?.value}
      onOpenChange={(isOpen) => {
        closeTimeout = setTimeout(() => setOpen(isOpen), 150);
      }}
      open={open}
      onValueChange={(value: "en-US" | "pt-BR") =>
        router.replace(pathname, { locale: value, scroll: false })
      }
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <CustomSelectTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "aspect-square px-2 hover:bg-accent/80 size-12 rounded-full"
            )}
          >
            <div className="aspect-square size-12 flex items-center justify-center">
              <GlobeIcon className="size-[1.2rem] text-neutral-800 dark:text-neutral-200" />
            </div>
          </CustomSelectTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("sections.language")}</p>
        </TooltipContent>
      </Tooltip>
      <SelectContent className="min-w-10">
        {DATA.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
