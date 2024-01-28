"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import HomeIcon from "@/components/icons/HomeIcon";

const activeLinkStyle =
  "bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text underline inline-block";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="">
      <div className="flex gap-4">
        <Link href="/">
          <HomeIcon />
        </Link>
        <Link
          href="/generation"
          className={cn({
            [activeLinkStyle]: pathname === "/generation",
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
      <Separator className="my-6" />
    </div>
  );
}
