import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Who We Are | TR Properties", description: "Learn about TR Properties, our perspective, and our long-term approach to property." };

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="Who We Are" title="Creating value through thoughtful property decisions." description="We see every property as a long-term opportunity to improve a place and contribute to the community around it." image="/projects/roselle-nj/exterior-current.jpeg" />
      <section className="section-pad bg-white">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="TR Properties" title="We believe good properties begin with a clear point of view." description="TR Properties identifies places with potential and takes a considered approach to their future. Our work is guided by the character of each property, the needs of its setting, and a commitment to quality that extends beyond the immediate project." />
            <p className="text-base leading-8 text-charcoal/65">We are deliberate about what we pursue and how we move it forward. That means paying attention to the details, working with capable partners, and making decisions with long-term ownership in mind.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-mist">
            <Image src="/projects/roselle-nj/living-area-current.jpeg" alt="Residential living area renovation by TR Properties" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-wide">
          <SectionHeading eyebrow="What Matters To Us" title="Principles that guide every property." align="center" />
          <div className="grid gap-5 sm:grid-cols-3">
            {["Respect the character of the place", "Make decisions for the long term", "Create value with purpose"].map((item) => <div key={item} className="flex items-center gap-3 border border-charcoal/10 bg-white p-6"><CheckCircle2 className="h-6 w-6 shrink-0 text-goldDeep" aria-hidden /><h2 className="text-lg font-extrabold text-charcoal">{item}</h2></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
