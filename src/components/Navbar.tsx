import Link from "next/link";
import { UserButton, SignedOut } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";
import { TokensCount } from "@/components/header/TokensCount";

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
            <span className="hidden sm:inline">AI Meal Planner</span>
          </Link>
        </h1>
        <div className="space-x-2 flex items-center">
          <Link href="/tokens">
            <TokensCount />
          </Link>
          <div className="flex justify-end w-8">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
          <SignedOut>
            <Link
              href="/sign-up"
              className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-white py-1 px-2 rounded text-md"
            >
              Sign Up
            </Link>
          </SignedOut>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
