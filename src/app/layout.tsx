import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // todo: generate with ai
  title: "PlateMateAI | AI Meal Planner",
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            {/* <div> */}
            <Navbar />
            {/* <main className="max-w-3xl mx-auto md:p-0 px-4 mt-4"> */}
            {children}
            {/* </main> */}
            {/* </div> */}
          </ClerkProvider>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
