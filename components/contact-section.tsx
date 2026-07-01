import { Building2, Mail, MapPin, Phone, Send } from "lucide-react";
import { contactDetails } from "@/lib/content";

export function ContactSection() {
  return (
    <div className="grid min-w-0 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <form className="grid min-w-0 gap-5 border border-charcoal/10 bg-white p-6 sm:p-8" aria-label="Contact form">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name"><input type="text" name="name" autoComplete="name" required /></Field>
          <Field label="Phone"><input type="tel" name="phone" autoComplete="tel" required /></Field>
        </div>
        <Field label="Email"><input type="email" name="email" autoComplete="email" required /></Field>
        <Field label="Subject"><input type="text" name="subject" required /></Field>
        <Field label="Message"><textarea name="message" rows={5} required /></Field>
        <button type="submit" className="focus-ring inline-flex items-center justify-center gap-2 bg-ember px-7 py-4 text-sm font-bold text-charcoal transition-colors hover:bg-charcoal hover:text-white">
          Send Message <Send size={18} aria-hidden />
        </button>
      </form>
      <div className="grid min-w-0 gap-5">
        <div className="bg-charcoal p-7 text-white">
          <ContactItem icon={Phone} label="Phone" value={contactDetails.phone} />
          <ContactItem icon={Mail} label="Email" value={contactDetails.email} />
          <ContactItem icon={MapPin} label="Address" value={contactDetails.address} />
        </div>
        <div className="relative grid min-h-[300px] place-items-center overflow-hidden border border-charcoal/10 bg-grid bg-[length:28px_28px] p-8 text-center">
          <div className="absolute inset-0 bg-white/75" />
          <div className="relative">
            <Building2 className="mx-auto h-11 w-11 text-goldDeep" aria-hidden />
            <p className="mt-4 text-sm font-extrabold uppercase text-charcoal">Google Maps Placeholder</p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-charcoal/60">Replace this area with your Google Maps embed when your office address is ready.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="grid min-w-0 gap-2 text-sm font-bold text-charcoal">{label}<span className="min-w-0 [&>*]:w-full [&>*]:border [&>*]:border-charcoal/15 [&>*]:bg-mist [&>*]:px-4 [&>*]:py-3 [&>*]:outline-none focus-within:[&>*]:border-goldDeep">{children}</span></label>;
}

function ContactItem({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="flex min-w-0 gap-4 border-b border-white/10 py-5 first:pt-0 last:border-0 last:pb-0">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden />
      <div className="min-w-0"><p className="text-xs font-bold uppercase text-white/50">{label}</p><p className="mt-1 break-words text-sm font-semibold text-white">{value}</p></div>
    </div>
  );
}
