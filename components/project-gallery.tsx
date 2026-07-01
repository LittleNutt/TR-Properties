import Image from "next/image";
import { projects } from "@/lib/content";

export function ProjectGallery() {
  return (
    <div className="grid gap-5">
      {projects.map((project) => (
        <article key={project.title} className="group max-w-5xl overflow-hidden bg-charcoal">
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9]">
            <Image
              src={project.image}
              alt={`${project.title} in ${project.location}`}
              fill
              sizes="(min-width: 1280px) 1024px, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="text-xs font-bold uppercase text-ember">{project.category}</p>
              <h2 className="mt-2 text-xl font-extrabold">{project.title}</h2>
              <p className="mt-1 text-sm text-white/65">{project.location}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
