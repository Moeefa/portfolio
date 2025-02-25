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

import { GlobeIcon } from "lucide-react";
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

export function LocaleSelect() {
	const pathname = usePathname();
	const router = useRouter();
	const locale = useLocale();
	const t = useTranslations();

	return (
		<Select
			value={DATA.find((item) => item.value === locale)?.value}
			onValueChange={(value: "en-US" | "pt-BR") =>
				router.replace(pathname, { locale: value, scroll: false })
			}
		>
			<SelectTrigger className="w-20 bg-secondary/70 rounded-full transition-colors">
				<SelectValue>
					{DATA.find((item) => item.value === locale)?.label}
				</SelectValue>
			</SelectTrigger>
			<SelectContent className="w-20">
				{DATA.map((item) => (
					<SelectItem key={item.value} value={item.value}>
						{item.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
