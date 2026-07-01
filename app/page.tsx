import { ArrowRight, Building2, Compass, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProjectGallery } from "@/components/project-gallery";
import { SectionHeading } from "@/components/section-heading";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section-pad bg-white">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden bg-mist">
            <Image src="/projects/roselle-nj/living-area-current.jpeg" alt="Residential living area renovation by TR Properties" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Who We Are" title="A long-term view of property." description="TR Properties is focused on acquiring, improving, and thoughtfully caring for properties with lasting potential. We value strong places, considered decisions, and work that contributes positively to the surrounding community." />
            <Link href="/about" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-charcoal transition-colors hover:text-goldDeep">More about TR Properties <ArrowRight size={17} aria-hidden /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-charcoal text-white">
        <div className="container-wide">
          <SectionHeading eyebrow="Our Perspective" title="Purposeful at every stage." description="Our approach is grounded in a clear vision for each property and the patience to bring that vision to life well." inverse />
          <div className="grid gap-px overflow-hidden bg-white/10 sm:grid-cols-3">
            {[
              { icon: Compass, title: "Thoughtful Direction", text: "We begin with a clear understanding of each property and its potential." },
              { icon: Building2, title: "Enduring Quality", text: "We prioritize decisions and improvements designed to stand the test of time." },
              { icon: Landmark, title: "Long-Term Value", text: "We care about what a property becomes and how it serves its community." }
            ].map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="bg-charcoal p-7 sm:p-8"><Icon className="h-7 w-7 text-ember" aria-hidden /><h2 className="mt-6 text-xl font-extrabold text-white">{item.title}</h2><p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Current Project" title="Roselle, New Jersey." description="Follow the transformation of a residential property as its living spaces, bedrooms, and exterior take shape." />
            <Link href="/projects" className="focus-ring mb-12 inline-flex shrink-0 items-center gap-2 text-sm font-bold text-charcoal transition-colors hover:text-goldDeep">View project progress <ArrowRight size={17} aria-hidden /></Link>
          </div>
          <ProjectGallery />
        </div>
      </section>

      <section className="bg-charcoal px-5 py-16 text-white sm:px-8">
        <div className="container-wide flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div><h2 className="text-3xl font-black sm:text-4xl">Want to connect with TR Properties?</h2><p className="mt-3 text-white/65">We welcome conversations about our company and current portfolio.</p></div>
          <Link href="/contact" className="focus-ring inline-flex items-center gap-2 bg-ember px-7 py-4 text-sm font-bold text-charcoal transition-colors hover:bg-white">Get in Touch <ArrowRight size={18} aria-hidden /></Link>
        </div>
      </section>
    </main>
  );
}
