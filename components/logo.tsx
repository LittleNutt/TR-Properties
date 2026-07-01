import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  dark?: boolean;
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("focus-ring flex h-24 w-36 shrink-0 items-center justify-center py-1 sm:w-40", className)} aria-label="TR Properties home">
      <Image
        src="/brand/tr-properties-logo.png"
        alt="TR Properties"
        width={1536}
        height={1024}
        className="h-full w-full object-contain"
        priority
      />
    </Link>
  );
}
