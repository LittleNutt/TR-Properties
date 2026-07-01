import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[700px] items-center overflow-hidden bg-charcoal py-28 text-white lg:min-h-[780px]">
      <Image
        src="/projects/roselle-nj/exterior-current.jpeg"
        alt="Renovated residential home exterior by TR Properties"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/65 to-transparent" />
      <div className="container-wide relative px-5 pt-12 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-ember">TR Properties</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Thoughtful Properties. Lasting Value.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            We invest in, improve, and care for properties with a focus on thoughtful decisions, enduring quality, and the communities around them.
          </p>
          <Link href="/projects" className="focus-ring mt-9 inline-flex items-center gap-2 bg-ember px-7 py-4 text-sm font-bold text-charcoal transition-colors hover:bg-white">
            Explore Our Projects
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
