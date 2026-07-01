import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[440px] items-end overflow-hidden bg-charcoal pb-16 pt-32 text-white sm:min-h-[500px] sm:pb-20">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-charcoal/72" />
      <div className="container-wide relative px-5 sm:px-8">
        <p className="text-sm font-bold uppercase text-ember">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{description}</p>
      </div>
    </section>
  );
}
