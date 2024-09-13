"use client";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";

const DATA = [
  {
    value: "en-US",
    label: (
      <Image
        src="/flags/en-US.png"
        width={30}
        height={30}
        unoptimized
        alt="en-US"
      />
    ),
  },
  {
    value: "pt-BR",
    label: (
      <Image
        src="/flags/pt-BR.png"
        width={30}
        height={30}
        unoptimized
        alt="pt-BR"
      />
    ),
  },
];

export function LocaleToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  return (
    <Select
      value={DATA.find((item) => item.value === locale)?.value}
      onValueChange={(value: "en-US" | "pt-BR") =>
        router.replace(pathname, { locale: value, scroll: false })
      }
    >
      <Tooltip>
        <TooltipTrigger className="rounded-xl" asChild>
          <SelectTrigger>
            <SelectValue
              placeholder={DATA.find((item) => item.value === locale)?.label}
            />
          </SelectTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Language</p>
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
