import { Category, Product, Testimonial, Location, HowItWorksStep } from "./types";

const categories: Category[] = [
  {
    id: "cat-cakes",
    name: "Торти",
    slug: "cakes",
    description: "Многослойни празнични торти със сезонни кремове и глазури.",
    order: 1,
  },
  {
    id: "cat-bento",
    name: "Бенто тортички",
    slug: "bento-cakes",
    description: "Мини десерти за подарък, пикник или личен повод.",
    order: 2,
  },
  {
    id: "cat-macarons",
    name: "Макарони",
    slug: "macarons",
    description: "Пастелни макарони по френска рецепта с модерни вкусове.",
    order: 3,
  },
  {
    id: "cat-desserts",
    name: "Десерт бар",
    slug: "other-desserts",
    description: "Еклери, тарталети и сезонни сладки за споделяне.",
    order: 4,
  },
  {
    id: "cat-gifts",
    name: "Ваучери за подарък",
    slug: "gift-vouchers",
    description: "Ръчно изписани ваучери за персонален жест.",
    order: 5,
  },
];

const baseExtras = [
  { id: "ext-gold", name: "24k златен лист", description: "Деликатни люспи", price: 12 },
  { id: "ext-berries", name: "Сезонни плодове", description: "Микс от свежи горски плодове", price: 9 },
  { id: "ext-ribbon", name: "Копринена панделка", description: "Избор на цвят", price: 6 },
];

const products: Product[] = [
  {
    id: "prod-rose",
    name: "Торта Роза и шамфъстък",
    slug: "rosewater-pistachio-cake",
    description:
      "Подписов пандишпан с вода от рози, шамфъстъково пралине и маскарпоне крем.",
    basePrice: 120,
    categoryId: "cat-cakes",
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90",
    isFeatured: true,
    variants: [
      { id: "var-rose-6", label: "6 парчета", price: 120 },
      { id: "var-rose-10", label: "10 парчета", price: 165 },
      { id: "var-rose-16", label: "16 парчета", price: 220 },
    ],
    fillings: ["Крем от роза и шамфъстък", "Крем брюле с ванилия", "Малинов конфитюр"],
    extras: baseExtras,
  },
  {
    id: "prod-bento",
    name: "Перлено бенто",
    slug: "pearl-bento-cake",
    description:
      "Мини торта с ванилов мус, пухкав блат и кадифено какаово покритие.",
    basePrice: 48,
    categoryId: "cat-bento",
    imageUrl:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90",
    isFeatured: true,
    variants: [
      { id: "var-bento-1", label: "Единично (10 см)", price: 48 },
      { id: "var-bento-2", label: "Подаръчен дуо сет", price: 88 },
    ],
    fillings: ["Мадагаскарска ванилия", "Солен карамел", "Лешниково пралине"],
    extras: baseExtras,
  },
  {
    id: "prod-macarons",
    name: "Макарон Галерия",
    slug: "macaron-gallery",
    description:
      "Кутия с 12 сезонни макарона – от мадагаскарска ванилия до юзу с черен сусам.",
    basePrice: 42,
    categoryId: "cat-macarons",
    imageUrl:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=90",
    variants: [
      { id: "var-mac-12", label: "12 броя", price: 42 },
      { id: "var-mac-24", label: "24 броя", price: 78 },
    ],
    fillings: ["Сезонна селекция"],
    extras: [
      { id: "ext-handwritten", name: "Ръчно послание", price: 4 },
      baseExtras[2],
    ],
  },
  {
    id: "prod-chocolate",
    name: "Шоколадово вуалé",
    slug: "chocolate-velvet-layer-cake",
    description:
      "Богати пластове тъмен шоколад с белгийско какао ганаш и ванилов маслен крем.",
    basePrice: 135,
    categoryId: "cat-cakes",
    imageUrl:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=90",
    isFeatured: true,
    variants: [
      { id: "var-choc-6", label: "6 парчета", price: 135 },
      { id: "var-choc-10", label: "10 парчета", price: 180 },
      { id: "var-choc-16", label: "Празнична (16 парчета)", price: 240 },
    ],
    fillings: ["Тъмен шоколадов ганаш", "Ванилов маслен крем", "Шоколадови стружки"],
    extras: baseExtras,
  },
  {
    id: "prod-strawberry",
    name: "Ягодов облак",
    slug: "strawberry-shortcake",
    description:
      "Лек ванилов блат с български ягоди и шантий крем.",
    basePrice: 110,
    categoryId: "cat-cakes",
    imageUrl:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=90",
    isFeatured: false,
    variants: [
      { id: "var-straw-6", label: "6 парчета", price: 110 },
      { id: "var-straw-10", label: "10 парчета", price: 150 },
      { id: "var-straw-16", label: "16 парчета", price: 200 },
    ],
    fillings: ["Свежи ягоди", "Крем шантий", "Ванилов блат"],
    extras: baseExtras,
  },
  {
    id: "prod-bento-berry",
    name: "Горски бенто",
    slug: "berry-delight-bento",
    description:
      "Мини торта с горски плодове, мус от бял шоколад и бадемов блат.",
    basePrice: 52,
    categoryId: "cat-bento",
    imageUrl:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=90",
    isFeatured: false,
    variants: [
      { id: "var-berry-1", label: "Единично (10 см)", price: 52 },
      { id: "var-berry-2", label: "Двойна кутия", price: 95 },
    ],
    fillings: ["Горски плодове", "Мус от бял шоколад", "Бадемов блат"],
    extras: baseExtras,
  },
  {
    id: "prod-eclairs",
    name: "Сет еклери",
    slug: "eclair-collection",
    description:
      "Шест ръчно шприцовани еклера с крем кафе, ванилия и тъмен шоколад.",
    basePrice: 38,
    categoryId: "cat-desserts",
    imageUrl:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=90",
    isFeatured: false,
    variants: [
      { id: "var-eclair-6", label: "6 броя", price: 38 },
      { id: "var-eclair-12", label: "12 броя", price: 70 },
    ],
    fillings: ["Кафе", "Ванилия", "Шоколад"],
    extras: [
      { id: "ext-box", name: "Подаръчна кутия", price: 5 },
      baseExtras[2],
    ],
  },
  {
    id: "prod-tiramisu",
    name: "Тирамису Класико",
    slug: "tiramisu-classico",
    description:
      "Традиционно италианско тирамису с бишкоти, напоени в еспресо и крем маскарпоне.",
    basePrice: 45,
    categoryId: "cat-desserts",
    imageUrl:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=90",
    isFeatured: true,
    variants: [
      { id: "var-tira-4", label: "4 порции", price: 45 },
      { id: "var-tira-8", label: "8 порции", price: 80 },
    ],
    fillings: ["Еспресо", "Маскарпоне", "Какао"],
    extras: baseExtras,
  },
  {
    id: "prod-croissant",
    name: "Кутия кроасани",
    slug: "artisan-croissant-box",
    description:
      "Селекция от шест маслени кроасана: класически, шоколадови, бадемови и сезонна изненада.",
    basePrice: 28,
    categoryId: "cat-desserts",
    imageUrl:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=90",
    isFeatured: false,
    variants: [
      { id: "var-crois-6", label: "6 броя", price: 28 },
      { id: "var-crois-12", label: "12 броя", price: 50 },
    ],
    fillings: ["Масло", "Шоколад", "Бадем", "Сезонен вкус"],
    extras: [
      { id: "ext-jam", name: "Домашно сладко", price: 6 },
      { id: "ext-box", name: "Подаръчна кутия", price: 4 },
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    id: "tm-1",
    name: "Велина К.",
    quote: "Всяка хапка е като от парижка сладкарница, но с топло отношение и усмивка.",
    rating: 5,
  },
  {
    id: "tm-2",
    name: "Михаил Д.",
    quote: "Сватбената торта беше безупречна – луксозна визия и перфектна организация.",
    rating: 5,
  },
  {
    id: "tm-3",
    name: "София Л.",
    quote: "Екипът ни води през дизайна, вкусовете и доставката. Гостите останаха без думи.",
    rating: 4.5,
  },
];

const locations: Location[] = [
  {
    id: "loc-center",
    title: "Ателие „Витоша“",
    address: "ул. Цар Асен 24, София",
    hours: ["Вторник–Петък 10:00–19:00", "Събота 10:00–17:00", "Неделя–Понеделник с предварителна уговорка"],
    mapsUrl: "https://maps.google.com",
  },
  {
    id: "loc-east",
    title: "Производствена кухня",
    address: "бул. Никола Тесла 11, София Тех Парк",
    hours: ["Понеделник–Събота 08:00–18:00", "Вземане на поръчки след потвърждение"],
    mapsUrl: "https://maps.google.com",
  },
];

const steps: HowItWorksStep[] = [
  {
    id: 1,
    title: "Изберете десерт",
    description: "Разгледайте нашите авторски дизайни и бестселъри.",
    icon: "sparkles",
  },
  {
    id: 2,
    title: "Персонализирайте",
    description: "Определете размер, крем, палитра и допълнения.",
    icon: "pen",
  },
  {
    id: 3,
    title: "Потвърдете и платете",
    description: "Плащане онлайн или при получаване от ателието.",
    icon: "credit-card",
  },
  {
    id: 4,
    title: "Празнувайте",
    description: "Вземете от ателието или заявете доставка.",
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

