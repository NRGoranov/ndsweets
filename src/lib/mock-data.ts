import { Category, Product, Testimonial, Location, HowItWorksStep } from "./types";

const categories: Category[] = [
  {
    id: "cat-cakes",
    name: "Cakes",
    slug: "cakes",
    description: "Layered celebrations with seasonal creams and finishes.",
    order: 1,
  },
  {
    id: "cat-bento",
    name: "Bento Cakes",
    slug: "bento-cakes",
    description: "Petite indulgences made for gifting and mini-moments.",
    order: 2,
  },
  {
    id: "cat-macarons",
    name: "Macarons",
    slug: "macarons",
    description: "Color-forward macarons inspired by Parisian ateliers.",
    order: 3,
  },
  {
    id: "cat-desserts",
    name: "Other Desserts",
    slug: "other-desserts",
    description: "Bars, choux and seasonal treats to complete the table.",
    order: 4,
  },
  {
    id: "cat-gifts",
    name: "Gift Vouchers",
    slug: "gift-vouchers",
    description: "Handwritten vouchers for bespoke gifting.",
    order: 5,
  },
];

const baseExtras = [
  { id: "ext-gold", name: "24k Gold Leaf", description: "Delicate flakes", price: 12 },
  { id: "ext-berries", name: "Fresh Berries", description: "Seasonal mix", price: 9 },
  { id: "ext-ribbon", name: "Silk Ribbon Finish", description: "Custom color", price: 6 },
];

const products: Product[] = [
  {
    id: "prod-rose",
    name: "Rosewater Pistachio Cake",
    slug: "rosewater-pistachio-cake",
    description:
      "Signature sponge infused with rosewater, pistachio praline crunch and mascarpone chantilly.",
    basePrice: 120,
    categoryId: "cat-cakes",
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90",
    isFeatured: true,
    variants: [
      { id: "var-rose-6", label: "Six slices", price: 120 },
      { id: "var-rose-10", label: "Ten slices", price: 165 },
      { id: "var-rose-16", label: "Celebration (16 slices)", price: 220 },
    ],
    fillings: ["Rose & pistachio cream", "Vanilla bean custard", "Raspberry confit"],
    extras: baseExtras,
  },
  {
    id: "prod-bento",
    name: "Pearl Bento Cake",
    slug: "pearl-bento-cake",
    description:
      "Mini signature cake with whipped vanilla mousse, soft sponge and velvet cocoa finish.",
    basePrice: 48,
    categoryId: "cat-bento",
    imageUrl:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90",
    isFeatured: true,
    variants: [
      { id: "var-bento-1", label: "Individual (10cm)", price: 48 },
      { id: "var-bento-2", label: "Gift duo", price: 88 },
    ],
    fillings: ["Vanilla bean", "Salted caramel", "Hazelnut praline"],
    extras: baseExtras,
  },
  {
    id: "prod-macarons",
    name: "Macaron Gallery",
    slug: "macaron-gallery",
    description:
      "Box of 12 seasonal macarons curated weekly, from Madagascar vanilla to black sesame yuzu.",
    basePrice: 42,
    categoryId: "cat-macarons",
    imageUrl:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=90",
    variants: [
      { id: "var-mac-12", label: "12 pieces", price: 42 },
      { id: "var-mac-24", label: "24 pieces", price: 78 },
    ],
    fillings: ["Seasonal selection"],
    extras: [
      { id: "ext-handwritten", name: "Handwritten note", price: 4 },
      baseExtras[2],
    ],
  },
  {
    id: "prod-chocolate",
    name: "Chocolate Velvet Layer Cake",
    slug: "chocolate-velvet-layer-cake",
    description:
      "Rich dark chocolate layers with Belgian cocoa ganache and vanilla bean buttercream.",
    basePrice: 135,
    categoryId: "cat-cakes",
    imageUrl:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=90",
    isFeatured: true,
    variants: [
      { id: "var-choc-6", label: "Six slices", price: 135 },
      { id: "var-choc-10", label: "Ten slices", price: 180 },
      { id: "var-choc-16", label: "Celebration (16 slices)", price: 240 },
    ],
    fillings: ["Dark chocolate ganache", "Vanilla buttercream", "Chocolate shavings"],
    extras: baseExtras,
  },
  {
    id: "prod-strawberry",
    name: "Strawberry Shortcake",
    slug: "strawberry-shortcake",
    description:
      "Light vanilla sponge with fresh Bulgarian strawberries and Chantilly cream.",
    basePrice: 110,
    categoryId: "cat-cakes",
    imageUrl:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=90",
    isFeatured: false,
    variants: [
      { id: "var-straw-6", label: "Six slices", price: 110 },
      { id: "var-straw-10", label: "Ten slices", price: 150 },
      { id: "var-straw-16", label: "Celebration (16 slices)", price: 200 },
    ],
    fillings: ["Fresh strawberries", "Chantilly cream", "Vanilla sponge"],
    extras: baseExtras,
  },
  {
    id: "prod-bento-berry",
    name: "Berry Delight Bento",
    slug: "berry-delight-bento",
    description:
      "Mini cake bursting with mixed berries, white chocolate mousse and almond sponge.",
    basePrice: 52,
    categoryId: "cat-bento",
    imageUrl:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90",
    isFeatured: false,
    variants: [
      { id: "var-berry-1", label: "Individual (10cm)", price: 52 },
      { id: "var-berry-2", label: "Gift duo", price: 95 },
    ],
    fillings: ["Mixed berries", "White chocolate mousse", "Almond sponge"],
    extras: baseExtras,
  },
  {
    id: "prod-eclairs",
    name: "Éclair Collection",
    slug: "eclair-collection",
    description:
      "Six hand-piped éclairs with coffee, vanilla, and chocolate fillings, topped with fondant.",
    basePrice: 38,
    categoryId: "cat-desserts",
    imageUrl:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=90",
    isFeatured: false,
    variants: [
      { id: "var-eclair-6", label: "6 pieces", price: 38 },
      { id: "var-eclair-12", label: "12 pieces", price: 70 },
    ],
    fillings: ["Coffee", "Vanilla", "Chocolate"],
    extras: [
      { id: "ext-box", name: "Gift box", price: 5 },
      baseExtras[2],
    ],
  },
  {
    id: "prod-tiramisu",
    name: "Tiramisu Classico",
    slug: "tiramisu-classico",
    description:
      "Traditional Italian tiramisu with espresso-soaked ladyfingers and mascarpone cream.",
    basePrice: 45,
    categoryId: "cat-desserts",
    imageUrl:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=90",
    isFeatured: true,
    variants: [
      { id: "var-tira-4", label: "4 servings", price: 45 },
      { id: "var-tira-8", label: "8 servings", price: 80 },
    ],
    fillings: ["Espresso", "Mascarpone", "Cocoa powder"],
    extras: baseExtras,
  },
  {
    id: "prod-croissant",
    name: "Artisan Croissant Box",
    slug: "artisan-croissant-box",
    description:
      "Selection of six buttery, flaky croissants: plain, chocolate, almond, and seasonal flavors. Baked fresh daily.",
    basePrice: 28,
    categoryId: "cat-desserts",
    imageUrl:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=90",
    isFeatured: false,
    variants: [
      { id: "var-crois-6", label: "6 pieces", price: 28 },
      { id: "var-crois-12", label: "12 pieces", price: 50 },
    ],
    fillings: ["Butter", "Chocolate", "Almond", "Seasonal"],
    extras: [
      { id: "ext-jam", name: "Homemade jam selection", price: 6 },
      { id: "ext-box", name: "Gift box", price: 4 },
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    id: "tm-1",
    name: "Velina K.",
    quote: "Every bite felt like it came straight from a Parisian pâtisserie yet with warmth.",
    rating: 5,
  },
  {
    id: "tm-2",
    name: "Mihail D.",
    quote: "They handled my wedding cake effortlessly—luxurious finish, seamless pickup.",
    rating: 5,
  },
  {
    id: "tm-3",
    name: "Sofia L.",
    quote: "The team guided me through design, flavours and delivery. Our guests were stunned.",
    rating: 4.5,
  },
];

const locations: Location[] = [
  {
    id: "loc-center",
    title: "Atelier Vitosha",
    address: "24 Tsar Asen St, Sofia",
    hours: ["Tue–Fri 10:00–19:00", "Sat 10:00–17:00", "Sun–Mon by appointment"],
    mapsUrl: "https://maps.google.com",
  },
  {
    id: "loc-east",
    title: "Production Kitchen",
    address: "11 Nikola Tesla Blvd, Sofia Tech Park",
    hours: ["Mon–Sat 08:00–18:00", "Order pickups by confirmation"],
    mapsUrl: "https://maps.google.com",
  },
];

const steps: HowItWorksStep[] = [
  {
    id: 1,
    title: "Choose your sweet",
    description: "Select a hero design or browse bestsellers.",
    icon: "sparkles",
  },
  {
    id: 2,
    title: "Personalise",
    description: "Pick size, filling, palette and extras.",
    icon: "pen",
  },
  {
    id: 3,
    title: "Confirm & pay",
    description: "Secure checkout online or upon pickup.",
    icon: "credit-card",
  },
  {
    id: 4,
    title: "Celebrate",
    description: "Collect in atelier or book delivery.",
    icon: "party",
  },
];

export const mockData = {
  categories,
  products,
  testimonials,
  locations,
  steps,
};

export const getMockCategories = async () => categories;
export const getMockProducts = async () => products;
export const getMockProductBySlug = async (slug: string) =>
  products.find((product) => product.slug === slug) ?? null;
export const getMockFeaturedProducts = async () => products.filter((p) => p.isFeatured);
export const getMockTestimonials = async () => testimonials;
export const getMockLocations = async () => locations;
export const getMockSteps = async () => steps;

