import { Category, Product, Testimonial, Location, HowItWorksStep } from "./types";

const categories: Category[] = [
  {
    id: "cat-standard",
    name: "Стандартни торти",
    slug: "standard-cakes",
    description: "Класически вкусове с модерна визия – за семейни и корпоративни поводи.",
    order: 1,
  },
  {
    id: "cat-premium",
    name: "Премиум торти",
    slug: "premium-cakes",
    description: "Авторски композиции с ръчно рисувани детайли и смели вкусове.",
    order: 2,
  },
  {
    id: "cat-bento",
    name: "Бенто торти",
    slug: "bento-cakes",
    description: "Мини тортички за подарък, работни срещи или лични ритуали.",
    order: 3,
  },
  {
    id: "cat-sweets",
    name: "Дребни сладки",
    slug: "petit-fours",
    description: "Еклери, макарони и кантучини за кафе-паузи и коктейли.",
    order: 4,
  },
  {
    id: "cat-catering",
    name: "Кетъринг",
    slug: "catering",
    description: "Сетове за офиси, събития и уикенд бранч с готово сервиране.",
    order: 5,
  },
  {
    id: "cat-other",
    name: "И други вдъхновения",
    slug: "others",
    description: "Сезонни колаборации, подаръчни кутии и лимитирани серии.",
    order: 6,
  },
];

const dessertImages = {
  rosePetalCake: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1200&q=90",
  berryMousse: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=90",
  chocolateLayers: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=90",
  blushCake: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=1200&q=90",
  cupcakeGarden: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=90",
  dessertTrio: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1200&q=90",
  citrusBars: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1200&q=90",
  pistachioCake: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=90",
  macaronsPastel: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=1200&q=90",
  eclairSet: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=90",
  tiramisuClassic: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=90",
  cateringDisplay: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=90",
  brunchTable: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=90",
  giftCrate: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=1200&q=90",
  petitFours: "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=1200&q=90",
  chocolateSlab: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc05?auto=format&fit=crop&w=1200&q=90",
  miniDessertDisplay: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=1200&q=90",
} as const;

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
    categoryId: "cat-standard",
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90",
    isFeatured: true,
    variants: [
      { id: "var-rose-6", label: "6 парчета", price: 120 },
      { id: "var-rose-10", label: "10 парчета", price: 165 },
      { id: "var-rose-16", label: "16 парчета", price: 220 },
    ],
    flavours: [
      {
        id: "fl-rose-classic",
        name: "Розов сатен",
        description: "Крем от розова вода, шамфъстък и маскарпоне.",
        images: [dessertImages.rosePetalCake, dessertImages.blushCake, dessertImages.cupcakeGarden],
      },
      {
        id: "fl-rose-berry",
        name: "Розов мус с малини",
        description: "Малинов конфитюр и розов мус с ванилов крем.",
        images: [dessertImages.berryMousse, dessertImages.rosePetalCake, dessertImages.dessertTrio],
      },
      {
        id: "fl-rose-citrus",
        name: "Розов цитрус",
        description: "Блосъм крем с портокал и лимонова кора.",
        images: [dessertImages.citrusBars, dessertImages.rosePetalCake, dessertImages.cupcakeGarden],
      },
    ],
    extras: baseExtras,
  },
  {
    id: "prod-chocolate",
    name: "Шоколадово вуалé",
    slug: "chocolate-velvet-layer-cake",
    description:
      "Богати пластове тъмен шоколад с белгийско какао ганаш и ванилов маслен крем.",
    basePrice: 135,
    categoryId: "cat-premium",
    imageUrl:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=90",
    isFeatured: true,
    variants: [
      { id: "var-choc-6", label: "6 парчета", price: 135 },
      { id: "var-choc-10", label: "10 парчета", price: 180 },
      { id: "var-choc-16", label: "Празнична (16 парчета)", price: 240 },
    ],
    flavours: [
      {
        id: "fl-choc-noir",
        name: "Noir 70%",
        description: "Тъмен ганаш с белгийско какао и ром.",
        images: [dessertImages.chocolateLayers, dessertImages.chocolateSlab, dessertImages.blushCake],
      },
      {
        id: "fl-choc-raspberry",
        name: "Шоколад и малина",
        description: "Шоколадови блатове с малинов мус и пюре.",
        images: [dessertImages.berryMousse, dessertImages.rosePetalCake, dessertImages.dessertTrio],
      },
      {
        id: "fl-choc-hazelnut",
        name: "Шоколадов пралин",
        description: "Лешников дакоаз, карамел и ганаш.",
        images: [dessertImages.cupcakeGarden, dessertImages.chocolateSlab, dessertImages.pistachioCake],
      },
    ],
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
      { id: "var-bento-4", label: "Сет за четирима", price: 165 },
    ],
    flavours: [
      {
        id: "fl-bento-vanilla",
        name: "Ванилия и карамел",
        description: "Ванилов мус, карамел и бял шоколад.",
        images: [dessertImages.rosePetalCake, dessertImages.cupcakeGarden, dessertImages.berryMousse],
      },
      {
        id: "fl-bento-hazelnut",
        name: "Лешников пралин",
        description: "Лешников крем, кафе и млечен шоколад.",
        images: [dessertImages.chocolateSlab, dessertImages.chocolateLayers, dessertImages.pistachioCake],
      },
      {
        id: "fl-bento-coconut",
        name: "Кокосов облак",
        description: "Кокосов мус, лайм и бял шоколад.",
        images: [dessertImages.dessertTrio, dessertImages.citrusBars, dessertImages.berryMousse],
      },
    ],
    extras: baseExtras,
  },
  {
    id: "prod-macarons",
    name: "Макарон Галерия",
    slug: "macaron-gallery",
    description:
      "Кутия с 12 сезонни макарона – от мадагаскарска ванилия до юзу с черен сусам.",
    basePrice: 42,
    categoryId: "cat-sweets",
    imageUrl:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=90",
    variants: [
      { id: "var-mac-12", label: "12 броя", price: 42 },
      { id: "var-mac-24", label: "24 броя", price: 78 },
      { id: "var-mac-36", label: "36 броя", price: 114 },
    ],
    flavours: [
      {
        id: "fl-macaron-floral",
        name: "Флорална серия",
        description: "Роза, лавандула и бъз.",
        images: [dessertImages.macaronsPastel, dessertImages.rosePetalCake, dessertImages.dessertTrio],
      },
      {
        id: "fl-macaron-classic",
        name: "Класически вкус",
        description: "Ванилия, шоколад и солен карамел.",
        images: [dessertImages.cupcakeGarden, dessertImages.chocolateSlab, dessertImages.pistachioCake],
      },
      {
        id: "fl-macaron-citrus",
        name: "Цитрус и подправки",
        description: "Юзу, лайм и кардамон.",
        images: [dessertImages.citrusBars, dessertImages.berryMousse, dessertImages.dessertTrio],
      },
    ],
    extras: [
      { id: "ext-handwritten", name: "Ръчно послание", price: 4 },
      baseExtras[2],
    ],
  },
  {
    id: "prod-catering-mini",
    name: "Мини десерт сет",
    slug: "mini-dessert-catering",
    description:
      "48 хапки – тарталети, мини-чийзкейк, плодови тарти и шоколадови кубчета.",
    basePrice: 185,
    categoryId: "cat-catering",
    imageUrl: dessertImages.miniDessertDisplay,
    variants: [
      { id: "var-mini-48", label: "48 броя", price: 185 },
      { id: "var-mini-96", label: "96 броя", price: 340 },
      { id: "var-mini-144", label: "144 броя", price: 480 },
    ],
    flavours: [
      {
        id: "fl-mini-classic",
        name: "Класически сет",
        description: "Тарталети с крем, шоколадови кубчета и мини-чийзкейк.",
        images: [dessertImages.cateringDisplay, dessertImages.petitFours, dessertImages.cupcakeGarden],
      },
      {
        id: "fl-mini-fruit",
        name: "Флора и плод",
        description: "Цитрусови тарталети, панакота и плодови бискоти.",
        images: [dessertImages.dessertTrio, dessertImages.berryMousse, dessertImages.citrusBars],
      },
      {
        id: "fl-mini-chocolate",
        name: "Шоколадова линия",
        description: "Троен шоколад, солен карамел и пралине.",
        images: [dessertImages.chocolateSlab, dessertImages.cupcakeGarden, dessertImages.chocolateLayers],
      },
    ],
    extras: [
      { id: "ext-tier", name: "Ретро етажерки под наем", price: 35 },
      baseExtras[1],
    ],
  },
  {
    id: "prod-seasonal",
    name: "Сезонна подаръчна кутия",
    slug: "seasonal-gift-crate",
    description:
      "Комбинация от бискоти, карамелизиран орех, мини мадлени и домашно сладко.",
    basePrice: 72,
    categoryId: "cat-other",
    imageUrl:
      "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=1200&q=90",
    variants: [
      { id: "var-gift-1", label: "Редовна", price: 72 },
      { id: "var-gift-2", label: "Разширена", price: 110 },
      { id: "var-gift-3", label: "Grand кутия", price: 150 },
    ],
    flavours: [
      {
        id: "fl-seasonal-winter",
        name: "Зимна селекция",
        description: "Канела, карамел, лешник и мандарина.",
        images: [dessertImages.giftCrate, dessertImages.dessertTrio, dessertImages.berryMousse],
      },
      {
        id: "fl-seasonal-spring",
        name: "Пролетна градина",
        description: "Бадемови мадлени, лимон и конфитюр от роза.",
        images: [dessertImages.rosePetalCake, dessertImages.citrusBars, dessertImages.cupcakeGarden],
      },
      {
        id: "fl-seasonal-summer",
        name: "Лятна палитра",
        description: "Тропически бискоти, ананас и маракуя.",
        images: [dessertImages.dessertTrio, dessertImages.berryMousse, dessertImages.citrusBars],
      },
    ],
    extras: [
      { id: "ext-note", name: "Калиграфско послание", price: 8 },
      baseExtras[2],
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

