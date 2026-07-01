"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-300", scrolled || open ? "border-white/10 bg-charcoal/95 shadow-soft backdrop-blur" : "border-white/10 bg-charcoal/50 backdrop-blur-sm")}>
      <nav className="container-wide flex h-28 items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring border-b-2 py-2 text-[15px] font-semibold leading-6 transition-colors",
                pathname === item.href ? "border-ember text-ember" : "border-transparent text-white/80 hover:text-ember"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/projects" className="focus-ring hidden bg-ember px-5 py-3 text-sm font-bold text-charcoal transition-colors hover:bg-white lg:inline-flex">
          View Projects
        </Link>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center border border-white/25 text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-charcoal px-5 py-4 shadow-soft lg:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={cn("focus-ring block py-3 text-sm font-bold", pathname === item.href ? "text-ember" : "text-white")}>
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
