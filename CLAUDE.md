# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build + TypeScript check
npm run lint     # ESLint
npm run start    # Serve production build
```

There are no tests. Always run `npm run build` after changes to catch TypeScript errors before committing.

## Architecture

**Stack:** Next.js 16.1.6 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · shadcn/ui · Lucide React

### Route Groups

The app uses two separate layout trees via Next.js route groups:

```
src/app/
  layout.tsx           — Root: html/body/font only, no chrome
  (store)/
    layout.tsx         — Wraps store pages with AnnouncementBar + Navbar + Footer
    page.tsx           — /
    products/page.tsx  — /products
    products/[id]/page.tsx — /products/[id]
    cart/page.tsx      — /cart
    checkout/page.tsx  — /checkout
  admin/
    layout.tsx         — Admin shell: fixed sidebar (desktop) + Sheet (mobile)
    page.tsx           — /admin (dashboard)
    products/page.tsx  — /admin/products
    orders/page.tsx    — /admin/orders
    users/page.tsx     — /admin/users
```

Route groups (`(store)`) don't affect URLs — `/products` still works, not `/(store)/products`.

### Data Layer (UI-only, no backend)

- `src/lib/mock-data.ts` — 15 products, 8 categories, 9 brands, mock cart items
- `src/lib/admin-mock-data.ts` — 12 orders, 10 users, dashboard stats, top products
- `src/types/index.ts` — All shared TypeScript types

No state management library. No API calls. Everything reads directly from mock data.

### Component Organization

```
src/components/
  ui/           — shadcn/ui primitives (button, badge, card, input, separator,
                  slider, select, sheet, breadcrumb, dialog)
  layout/       — AnnouncementBar, Navbar, Footer (store chrome)
  home/         — HeroBanner (carousel), CategoryGrid, FeaturedProducts
  products/     — ProductCard, ProductGrid, FilterSidebar, SortBar
  product/      — ImageGallery, ProductInfo (single product detail)
  cart/         — CartItem, OrderSummary (shared with checkout via isCheckout prop)
  checkout/     — CheckoutForm
  admin/        — AdminSidebar, AdminHeader
```

### Styling Conventions

- **Tailwind v4** — CSS-based config via `globals.css` imports (`@import "tailwindcss"`). No `tailwind.config.js`.
- **Accent color:** `teal-500` (#14b8a6) — used for prices, badges, CTAs, active states
- **Dark surfaces:** `zinc-900` — AnnouncementBar, Footer, Admin sidebar
- **Cards:** `bg-white rounded-xl shadow-sm border border-zinc-100`
- Admin active nav item: `bg-teal-500/20 text-teal-400 border-l-2 border-teal-500`
- shadcn tokens live in `globals.css` as CSS custom properties (OKLCH)

### Key Patterns

- **`"use client"`** is required on any component using hooks (useState, useEffect, usePathname). Server components are the default.
- **`params` is async** in Next.js 16 — always `await params` before destructuring in `[id]` routes.
- **`@/`** path alias maps to `src/` (configured in tsconfig `paths`).
- **Images:** Use `<img>` tags directly (not `next/image`) since product images come from Unsplash URLs set in `next.config.ts` `remotePatterns`.
- **shadcn components** are installed via `npx shadcn add <component>` — they land in `src/components/ui/`.

### Adding shadcn Components

```bash
npx shadcn add <component-name>
```

Do not create a new Next.js project to add shadcn — run the command inside the existing repo root.

## Rules

- Al momento de crear datps nuevos no uses Modales, usa paginas dedicadas para los formularios
- No uses server actions, usa Route handlers
- Para el manejo de estado global usa Zustand
- Para Formularios usa react-hook-form y zod