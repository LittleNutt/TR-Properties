import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Contact | TR Properties", description: "Contact TR Properties to learn more about our company and current projects." };

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Start a conversation with us." description="Reach out to learn more about TR Properties, our current projects, or opportunities to connect." image="/projects/roselle-nj/living-area-current.jpeg" />
      <section className="section-pad bg-mist">
        <div className="container-wide">
          <SectionHeading eyebrow="Get in Touch" title="We’d like to hear from you." description="Use the form below or contact us directly. Replace the placeholder phone, email, and address with your business information." align="center" />
          <ContactSection />
        </div>
      </section>
    </main>
  );
}
