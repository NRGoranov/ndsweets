## ndsweets frontend

Next.js 15 App Router + Tailwind + shadcn/ui + Framer Motion. Designed to run standalone (mock data + mock payments) or connect to the Express API.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server at `http://localhost:3000` |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next rules) |

### Environment variables

Create `.env.local` (or configure in Vercel):

```
NEXT_PUBLIC_API_BASE_URL=https://api.example.com    # optional, enables live data
NEXT_PUBLIC_USE_MOCK_PAYMENT=true                   # "true" keeps payment simulated
```

- When `NEXT_PUBLIC_API_BASE_URL` is missing the UI consumes `src/lib/mock-data.ts`.
- When the value exists the `dataClient` fetches `/api/categories`, `/api/products`, `/api/orders`, etc. from the backend.
- Set `NEXT_PUBLIC_USE_MOCK_PAYMENT=false` once the backend + Stripe are ready; otherwise checkout redirects to `/checkout/success?mock=true`.

### Architecture highlights

- `src/components/ui/*` – shadcn/ui primitives (Button, Card, Input, Sheet, Badge…)
- `src/components/sections/*` – hero, featured grids, menu filters, checkout, contact forms
- `src/hooks/useCartStore.ts` – Zustand cart store persisted in `localStorage`
- `src/lib/mock-data.ts` – mock catalogue/testimonial/location data mirrored by the Prisma seed
- `src/lib/order-client.ts` – switches between live API calls and mock payment/order flows

The home page is server-rendered while experiential sections (hero, scroll hint, timelines, testimonials) are hydrated with Framer Motion micro-animations to reflect the luxurious Mishka-inspired aesthetic.
