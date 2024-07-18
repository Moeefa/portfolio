import "./globals.css";

import Grain from "@/components/grain";
import type { Metadata } from "next";
import Vignette from "@/components/vignette";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "./Satoshi-Variable.woff2",
  display: "auto",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Xinaider",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <>
          <Grain />
          <Vignette />
        </>

        {children}
      </body>
    </html>
  );
}
