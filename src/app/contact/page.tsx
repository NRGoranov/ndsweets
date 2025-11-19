import { ContactForm } from "@/components/sections/ContactForm";
import { LocationsSection } from "@/components/sections/Locations";
import { getLocations } from "@/lib/data-client";

export default async function ContactPage() {
  const locations = await getLocations();
  return (
    <div className="pb-20 pt-12">
      <div className="container space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Контакт</p>
        <h1 className="font-display text-4xl text-primary">Свържете се с нашия сладкарски екип</h1>
      </div>
      <div className="container mt-10 grid gap-10 lg:grid-cols-2">
        <ContactForm />
        <div className="rounded-[2rem] border border-primary/10 bg-cream-50/70 p-6 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/50">Директни линии</p>
          <p className="mt-3 text-lg text-primary/80">
            WhatsApp/Viber: +359 000 000 · Email: concierge@ndsweets.com
          </p>
          <p className="mt-6 text-primary/70">
            Консултации за торти по поръчка: Понеделник–Събота, 10:00–18:00. За медии и партньорства
            пишете на studio@ndsweets.com.
          </p>
        </div>
      </div>
      <LocationsSection locations={locations} />
    </div>
  );
}

