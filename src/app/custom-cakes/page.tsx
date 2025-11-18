import { CustomCakeForm } from "@/components/sections/CustomCakeForm";

export default function CustomCakesPage() {
  return (
    <div className="container space-y-6 py-12">
      <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Custom cakes</p>
      <h1 className="font-display text-4xl text-primary">Design consultations</h1>
      <p className="max-w-3xl text-primary/70">
        Describe your celebration, share colour palette references and let our stylists craft a
        tailored concept. We typically reply within 24 hours with sketches, tasting options and
        logistics.
      </p>
      <CustomCakeForm />
    </div>
  );
}

