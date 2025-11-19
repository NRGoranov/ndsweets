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
  birthdayCake: [
    "/sweets gallery/birthday_cake (1).jpg",
    "/sweets gallery/birthday_cake (2).jpg",
    "/sweets gallery/birthday_cake (3).jpg",
  ],
  chocoCake: [
    "/sweets gallery/choco_cake (1).jpg",
    "/sweets gallery/choco_cake (2).jpg",
    "/sweets gallery/choco_cake (3).jpg",
  ],
  biscottiCake: [
    "/sweets gallery/bishcoti_cake (1).jpg",
    "/sweets gallery/bishcoti_cake (2).jpg",
    "/sweets gallery/bishcoti_cake (3).jpg",
  ],
  chocoBrownie: [
    "/sweets gallery/choco_brownie (1).jpg",
    "/sweets gallery/choco_brownie (2).jpg",
    "/sweets gallery/choco_brownie (3).jpg",
  ],
  donuts: [
    "/sweets gallery/donuts (1).jpg",
    "/sweets gallery/donuts (2).jpg",
    "/sweets gallery/donuts (3).jpg",
  ],
  macaroons: [
    "/sweets gallery/macaroons.jpg",
    "/sweets gallery/macaroons (2).jpg",
    "/sweets gallery/macaroons(3).jpg",
  ],
  pies: [
    "/sweets gallery/pie (1).jpg",
    "/sweets gallery/pie (2).jpg",
    "/sweets gallery/pie (3).jpg",
  ],
  purpleCake: [
    "/sweets gallery/purple_cake (1).jpg",
    "/sweets gallery/purple_cake (2).jpg",
    "/sweets gallery/purple_cake (3).jpg",
  ],
  weddingCake: [
    "/sweets gallery/wedding_cake (1).jpg",
    "/sweets gallery/wedding_cake (2).jpg",
    "/sweets gallery/wedding_cake (3).jpg",
  ],
} as const;

const baseExtras = [
  { id: "ext-gold", name: "24k златен лист", description: "Деликатни люспи", price: 12 },
  { id: "ext-berries", name: "Сезонни плодове", description: "Микс от свежи горски плодове", price: 9 },
  { id: "ext-ribbon", name: "Копринена панделка", description: "Избор на цвят", price: 6 },
];

const products: Product[] = [
  {
    id: "prod-rose",
    name: "Торта „Празничен букет“",
    slug: "rosewater-pistachio-cake",
    description:
      "Висока ванилова торта със сочни блатове, френски маслен крем и флорална декорация.",
    basePrice: 120,
    categoryId: "cat-standard",
    imageUrl: dessertImages.birthdayCake[0],
    isFeatured: true,
    variants: [
      { id: "var-rose-6", label: "6 парчета", price: 120 },
      { id: "var-rose-10", label: "10 парчета", price: 165 },
      { id: "var-rose-16", label: "16 парчета", price: 220 },
    ],
    flavours: [
      {
        id: "fl-rose-classic",
        name: "Ванилия и роза",
        description: "Ванилов крем с нотка розова вода и карамелизиран шамфъстък.",
        images: [dessertImages.birthdayCake[0], dessertImages.birthdayCake[1], dessertImages.birthdayCake[2]],
      },
      {
        id: "fl-rose-berry",
        name: "Горски плодове",
        description: "Малинов конфитюр, кадифен крем и свежи плодове.",
        images: [dessertImages.birthdayCake[1], dessertImages.birthdayCake[2], dessertImages.birthdayCake[0]],
      },
      {
        id: "fl-rose-citrus",
        name: "Цитрус и полски цветя",
        description: "Лимонов мус, портокалова кора и ядлива флорална декорация.",
        images: [dessertImages.birthdayCake[2], dessertImages.birthdayCake[0], dessertImages.birthdayCake[1]],
      },
    ],
    extras: baseExtras,
  },
  {
    id: "prod-chocolate",
    name: "Торта „Нуар Велюр“",
    slug: "chocolate-velvet-layer-cake",
    description:
      "Троен шоколадов блат с белгийско какао, кремю и огледална глазура.",
    basePrice: 135,
    categoryId: "cat-premium",
    imageUrl: dessertImages.chocoCake[0],
    isFeatured: true,
    variants: [
      { id: "var-choc-6", label: "6 парчета", price: 135 },
      { id: "var-choc-10", label: "10 парчета", price: 180 },
      { id: "var-choc-16", label: "Празнична (16 парчета)", price: 240 },
    ],
    flavours: [
      {
        id: "fl-choc-noir",
        name: "Нуар 70%",
        description: "Интензивен ганаш с ром и печен какаов нибс.",
        images: [dessertImages.chocoCake[0], dessertImages.chocoCake[1], dessertImages.chocoCake[2]],
      },
      {
        id: "fl-choc-raspberry",
        name: "Малина и какао",
        description: "Шоколадови блатове, малинов крем и розов шоколад.",
        images: [dessertImages.chocoCake[1], dessertImages.chocoCake[2], dessertImages.chocoCake[0]],
      },
      {
        id: "fl-choc-hazelnut",
        name: "Пралине и карамел",
        description: "Лешников дакоаз, карамелен сос и млечен шоколад.",
        images: [dessertImages.chocoCake[2], dessertImages.chocoCake[0], dessertImages.chocoCake[1]],
      },
    ],
    extras: baseExtras,
  },
  {
    id: "prod-bento",
    name: "Бенто „Лавандулен ритуал“",
    slug: "pearl-bento-cake",
    description:
      "Мини торта в кутия с кадифена глазура, подходяща за подарък или интимен празник.",
    basePrice: 48,
    categoryId: "cat-bento",
    imageUrl: dessertImages.purpleCake[0],
    isFeatured: true,
    variants: [
      { id: "var-bento-1", label: "Единично (10 см)", price: 48 },
      { id: "var-bento-2", label: "Подаръчен дуо сет", price: 88 },
      { id: "var-bento-4", label: "Сет за четирима", price: 165 },
    ],
    flavours: [
      {
        id: "fl-bento-vanilla",
        name: "Лавандула и ванилия",
        description: "Лавандулов крем, ванилов блат и бял шоколад.",
        images: [dessertImages.purpleCake[0], dessertImages.purpleCake[1], dessertImages.purpleCake[2]],
      },
      {
        id: "fl-bento-hazelnut",
        name: "Орехов пралин",
        description: "Тъмен блат, лешников крем и пурпурна глазура.",
        images: [dessertImages.purpleCake[1], dessertImages.purpleCake[2], dessertImages.purpleCake[0]],
      },
      {
        id: "fl-bento-coconut",
        name: "Боровинка и кокос",
        description: "Кокосов мус, конфитюр от боровинки и ванилов крем.",
        images: [dessertImages.purpleCake[2], dessertImages.purpleCake[0], dessertImages.purpleCake[1]],
      },
    ],
    extras: baseExtras,
  },
  {
    id: "prod-macarons",
    name: "Макарон колекция „Пастел“",
    slug: "macaron-gallery",
    description:
      "Асортимент от френски макарони с ръчно боядисани шелфове и кремове в сезонни вкусове.",
    basePrice: 42,
    categoryId: "cat-sweets",
    imageUrl: dessertImages.macaroons[0],
    variants: [
      { id: "var-mac-12", label: "12 броя", price: 42 },
      { id: "var-mac-24", label: "24 броя", price: 78 },
      { id: "var-mac-36", label: "36 броя", price: 114 },
    ],
    flavours: [
      {
        id: "fl-macaron-floral",
        name: "Флорален сет",
        description: "Роза, лавандула и бъз.",
        images: [dessertImages.macaroons[0], dessertImages.macaroons[1], dessertImages.macaroons[2]],
      },
      {
        id: "fl-macaron-classic",
        name: "Класика",
        description: "Ванилия, шоколад и солен карамел.",
        images: [dessertImages.macaroons[1], dessertImages.macaroons[2], dessertImages.macaroons[0]],
      },
      {
        id: "fl-macaron-citrus",
        name: "Цитрус и подправки",
        description: "Юзу, лайм и кардамон.",
        images: [dessertImages.macaroons[2], dessertImages.macaroons[0], dessertImages.macaroons[1]],
      },
    ],
    extras: [
      { id: "ext-handwritten", name: "Ръчно послание", price: 4 },
      baseExtras[2],
    ],
  },
  {
    id: "prod-catering-mini",
    name: "Мини десерт сет „Гала“",
    slug: "mini-dessert-catering",
    description:
      "48 гурме хапки – донът филета, тарталети и брауни кубчета, подредени за коктейлно сервиране.",
    basePrice: 185,
    categoryId: "cat-catering",
    imageUrl: dessertImages.donuts[0],
    variants: [
      { id: "var-mini-48", label: "48 броя", price: 185 },
      { id: "var-mini-96", label: "96 броя", price: 340 },
      { id: "var-mini-144", label: "144 броя", price: 480 },
    ],
    flavours: [
      {
        id: "fl-mini-classic",
        name: "Класически сет",
        description: "Ванилови тарталети, пурпурни мини тортички и глазирани донъти.",
        images: [dessertImages.donuts[0], dessertImages.donuts[1], dessertImages.donuts[2]],
      },
      {
        id: "fl-mini-fruit",
        name: "Бискоти и плод",
        description: "Бишкоти с мус, плодови тарталети и мини пайове.",
        images: [dessertImages.biscottiCake[0], dessertImages.biscottiCake[1], dessertImages.pies[0]],
      },
      {
        id: "fl-mini-chocolate",
        name: "Шоколадова линия",
        description: "Брауни кубчета, шоколадови кръгчета и карамелизирани ядки.",
        images: [dessertImages.chocoBrownie[0], dessertImages.chocoBrownie[1], dessertImages.chocoBrownie[2]],
      },
    ],
    extras: [
      { id: "ext-tier", name: "Ретро етажерки под наем", price: 35 },
      baseExtras[1],
    ],
  },
  {
    id: "prod-seasonal",
    name: "Сезонна кутия „Ателие“",
    slug: "seasonal-gift-crate",
    description:
      "Авторска селекция от пайове, брауни и мини тортички, подбрани спрямо сезона.",
    basePrice: 72,
    categoryId: "cat-other",
    imageUrl: dessertImages.pies[0],
    variants: [
      { id: "var-gift-1", label: "Редовна", price: 72 },
      { id: "var-gift-2", label: "Разширена", price: 110 },
      { id: "var-gift-3", label: "Grand кутия", price: 150 },
    ],
    flavours: [
      {
        id: "fl-seasonal-winter",
        name: "Зимна селекция",
        description: "Пай с карамел, брауни с лешник и мини торта с бял шоколад.",
        images: [dessertImages.pies[0], dessertImages.chocoBrownie[0], dessertImages.weddingCake[0]],
      },
      {
        id: "fl-seasonal-spring",
        name: "Пролетна градина",
        description: "Цитрусов пай, бискоти с крем и лилава мини торта.",
        images: [dessertImages.pies[1], dessertImages.biscottiCake[0], dessertImages.purpleCake[0]],
      },
      {
        id: "fl-seasonal-summer",
        name: "Лятна палитра",
        description: "Тропически тарт, донът с плодове и сватбена мини тортичка.",
        images: [dessertImages.pies[2], dessertImages.donuts[2], dessertImages.weddingCake[2]],
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

