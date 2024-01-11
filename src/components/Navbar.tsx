import { getUserAuth } from "@/lib/auth/utils";
import Link from "next/link";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";

export default async function Navbar() {
  const { session } = await getUserAuth();

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
          <Link href="/faq">FAQ</Link>
          <Link href="/dashboard">Dashboard</Link>
          <div className="flex justify-end w-16">
            {session?.user ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton />
            )}
          </div>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
