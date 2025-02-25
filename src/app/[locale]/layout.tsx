import "./globals.css";

import { Inter, Source_Serif_4 } from "next/font/google";
import type { Metadata, ResolvingMetadata } from "next";
import { getMessages, getTranslations } from "next-intl/server";

import { NextIntlClientProvider } from "next-intl";
import { ProgressiveBlur } from "@/components/progressive-blur";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

type Props = {
	params: { locale: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const t = await getTranslations({
		locale: params.locale,
	});

	return {
		metadataBase: new URL("https://xinaider.vercel.app"),
		title: {
			default: "Xinaider",
			template: "%s",
		},
		description: t("description"),
		openGraph: {
			title: "Xinaider",
			description: t("description"),
			url: "https://xinaider.vercel.app",
			siteName: "Xinaider",
			locale: params.locale,
			type: "website",
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		twitter: {
			title: "Xinaider",
			card: "summary_large_image",
		},
		verification: {
			google: "",
			yandex: "",
		},
	};
}

const serif = Source_Serif_4({
	variable: "--font-serif",
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

const sans = Inter({
	variable: "--font-sans",
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

export default async function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${sans.variable} ${serif.variable} font-sans`}>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider attribute="class" defaultTheme="light">
						<TooltipProvider delayDuration={0}>
							<main className="min-h-screen antialiased py-20">
								<ProgressiveBlur direction="top" />
								{children}
								<ProgressiveBlur direction="bottom" />
							</main>
						</TooltipProvider>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
