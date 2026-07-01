import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "left", inverse = false }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <p className={cn("mb-3 text-sm font-bold uppercase", inverse ? "text-ember" : "text-goldDeep")}>{eyebrow}</p>
      <h2 className={cn("text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl", inverse ? "text-white" : "text-charcoal")}>{title}</h2>
      {description ? <p className={cn("mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8", inverse ? "text-white/70" : "text-charcoal/70")}>{description}</p> : null}
    </div>
  );
}
