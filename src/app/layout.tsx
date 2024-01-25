import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // todo: generate with ai
  // title: "PlateMateAI | AI Meal Planner",
  title: "ai",
  description:
    "Experience the future of cooking with our AI—personalized recipes, efficiency, and savings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* todo: make sure colors are correct */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <div className="bg-red-700 text-white font-[200] text-sm p-2 flex gap-2">
          work in progress | wip | Follow out X for more updates |
          <a
            href="https://twitter.com/platemateai"
            className="font-bold"
            rel="noreferrer"
            target="_blank"
          >
            https://twitter.com/platemateai
          </a>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider afterSignInUrl="/tokens" afterSignUpUrl="/tokens">
            <Navbar />
            <main className="mt-6 p-6 max-w-5xl mx-auto shadow bg-popover rounded-x">
              <Header />
              {children}
            </main>
          </ClerkProvider>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
