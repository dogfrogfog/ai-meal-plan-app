"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const activeLinkStyle =
  "bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text underline inline-block";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between mb-24">
      <h1 className="text-4xl font-semibold">Dashboard</h1>
      <div className="flex gap-4">
        <Link
          href="/"
          className={cn({
            [activeLinkStyle]: pathname === "/",
          })}
        >
          Generation
        </Link>
        <Link
          href="/history"
          className={cn({
            [activeLinkStyle]: pathname === "/history",
          })}
        >
          History
        </Link>
        <Link
          href="/tokens"
          className={cn({
            [activeLinkStyle]: pathname === "/tokens",
          })}
        >
          Tokens
        </Link>
      </div>
    </div>
  );
}
