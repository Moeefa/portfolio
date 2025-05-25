import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";

import { Fade } from "@/components/fade";
import { ThemeProvider } from "@/components/theme-provider";

const interSans = Inter({
	variable: "--font-inter-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Xinaider",
	description: "A place to explore my projects and ideas.",
};

export const viewport: Viewport = {
	width: "device-width",
	height: "device-height",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full" suppressHydrationWarning>
			<body
				className={`${interSans.variable} ${geistMono.variable} antialiased min-h-full h-full`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Fade direction="top" />
					{children}
					<Fade color="var(--background)" direction="bottom" />
				</ThemeProvider>
			</body>
		</html>
	);
}
