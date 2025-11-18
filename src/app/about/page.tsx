export const metadata = {
  title: "About | ndsweets",
};

export default function AboutPage() {
  return (
    <div className="container space-y-6 py-12">
      <p className="text-sm uppercase tracking-[0.4em] text-primary/50">Our story</p>
      <h1 className="font-display text-4xl text-primary">Rooted in Sofia, inspired by Paris</h1>
      <p className="max-w-3xl text-lg text-primary/80">
        ndsweets is a boutique bakery studio balancing couture pastry craft with the warmth of a
        neighbourhood atelier. We source Bulgarian Jersey cream, single-origin chocolate and organic
        flour from local mills. Every signature piece is finished by hand—inspired by Mishka Bakery’s
        refined aesthetic yet translated into our own timeless voice.
      </p>
      <p className="max-w-3xl text-primary/70">
        Our team of pastry chefs, stylists and service concierges collaborate daily to ensure smooth
        ordering, meticulous logistics and styling touches that feel both luxurious and welcoming.
      </p>
    </div>
  );
}

