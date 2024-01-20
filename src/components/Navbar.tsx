import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";
import { TokensCount } from "@/components/header/TokensCount";
import { Suspense } from "react";

export default async function Navbar() {
  return (
    <div className="bg-popover border-b">
      <nav className="p-2 flex items-center justify-between transition-all duration-300 max-w-5xl mx-auto">
        <h1 className="font-semibold hover:opacity-75 transition-hover cursor-pointer">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="PlateMateAI logo"
              height={60}
              width={60}
            />
            AI Meal Planner
          </Link>
        </h1>
        <div className="space-x-4 flex items-center">
          <Link href="/tokens" className="px-4 py-2 text-sm">
            <span className="mr-1 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              <Suspense fallback={""}>
                <TokensCount />
              </Suspense>
            </span>
          </Link>
          <div className="flex justify-end w-16">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
