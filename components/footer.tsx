import Link from "next/link";
import { Logo } from "@/components/logo";
import { contactDetails, navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-12 text-white sm:px-8">
      <div className="container-wide grid gap-10 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            Thoughtful properties, careful stewardship, and a long-term approach to creating lasting value.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase text-white">Quick Links</h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="w-fit text-sm text-white/60 transition-colors hover:text-ember">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase text-white">Contact</h2>
          <div className="mt-5 space-y-3 text-sm leading-6 text-white/60">
            <p>{contactDetails.phone}</p>
            <p className="break-all">{contactDetails.email}</p>
            <p>{contactDetails.address}</p>
          </div>
        </div>
      </div>
      <div className="container-wide mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
        &copy; {new Date().getFullYear()} TR Properties. All rights reserved.
      </div>
    </footer>
  );
}
