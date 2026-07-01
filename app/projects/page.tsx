import type { Metadata } from "next";
import { CircleDot, MapPin } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { roselleProject } from "@/lib/content";

export const metadata: Metadata = {
  title: "Roselle, NJ Project | TR Properties",
  description: "Follow the residential renovation currently in progress by TR Properties in Roselle, New Jersey."
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Current Project"
        title={roselleProject.title}
        description={roselleProject.description}
        image="/projects/roselle-nj/exterior-current.jpeg"
      />

      <section className="border-b border-charcoal/10 bg-white px-5 py-8 sm:px-8">
        <div className="container-wide flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">
          <p className="flex items-center gap-2 text-sm font-bold text-charcoal"><MapPin className="h-5 w-5 text-goldDeep" aria-hidden />{roselleProject.location}</p>
          <p className="flex items-center gap-2 text-sm font-bold text-charcoal"><CircleDot className="h-5 w-5 text-goldDeep" aria-hidden />{roselleProject.status}</p>
          <p className="text-sm font-semibold text-charcoal/60">{roselleProject.type}</p>
        </div>
      </section>

      {roselleProject.sections.map((section, sectionIndex) => (
        <section key={section.title} className={`section-pad ${sectionIndex % 2 === 0 ? "bg-white" : "bg-mist"}`}>
          <div className="container-wide">
            <div className="mb-9 max-w-2xl">
              <p className="text-sm font-bold uppercase text-goldDeep">0{sectionIndex + 1}</p>
              <h2 className="mt-3 text-3xl font-black text-charcoal sm:text-4xl">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-charcoal/65">{section.description}</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {section.photos.map((photo, photoIndex) => (
                <figure key={photo.src} className="overflow-hidden bg-charcoal">
                  <div className="relative aspect-[4/3] sm:aspect-[3/2]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                      priority={sectionIndex === 0 && photoIndex === 0}
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-4 px-5 py-4 text-sm text-white/65">
                    <span>{section.title}</span>
                    <span>Progress Photo {photoIndex + 1}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
