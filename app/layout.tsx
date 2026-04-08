import type { Metadata } from "next";
import { Epilogue, Inter, JetBrains_Mono, Manrope, Zen_Kaku_Gothic_New } from "next/font/google";
import { SiteNav } from "@/components/layout/SiteNav";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-kanso-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const stitchHeadline = Epilogue({
  subsets: ["latin"],
  variable: "--font-stitch-headline",
  weight: ["700", "800"],
  display: "swap",
});

const stitchBody = Manrope({
  subsets: ["latin"],
  variable: "--font-stitch-body",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rayden Siarot",
  description:
    "Product designer and front-end developer. Case studies and work focused on constraints, clarity, and measurable user outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${zenKaku.variable} ${jetbrainsMono.variable} ${inter.variable} ${stitchHeadline.variable} ${stitchBody.variable} h-full scroll-smooth`}
    >
      <body
        className={`${inter.className} min-h-full flex flex-col antialiased selection:bg-[#af101a] selection:text-white`}
      >
        <SiteNav />
        <div className="relative z-10 flex min-h-full flex-1 flex-col pt-20 sm:pt-24">
          {children}
        </div>
      </body>
    </html>
  );
}
