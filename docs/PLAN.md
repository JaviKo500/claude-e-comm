# Plan: TechStore E-Commerce — Fase 1: UI

## Context
Ecommerce de productos de computación (PC, monitores, teclados, mouse, etc.) con stack Next.js + PostgreSQL + Prisma + shadcn/ui. Esta fase se enfoca exclusivamente en el diseño UI con datos mock estáticos — sin lógica de backend. La referencia visual es la captura adjunta: barra de anuncio, navbar con búsqueda/cart/wishlist, hero banner, listado con filtros sidebar, cards de producto.

---

## Páginas a construir
- `/` — Home (Hero + Categorías + Productos destacados)
- `/products` — Listado con filtros sidebar (como la captura)
- `/products/[id]` — Detalle de producto
- `/cart` — Carrito
- `/checkout` — Formulario de pago

**Estado**: Solo visual, sin Zustand ni Context. Los botones/iconos serán estáticos.

---

## Paso 1 — Inicializar proyecto

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npx shadcn@latest init
```

**shadcn components a instalar:**
```bash
npx shadcn@latest add button badge card input separator slider select sheet breadcrumb dialog
```

---

## Paso 2 — Estructura de archivos

```
src/
  app/
    layout.tsx              ← RootLayout (AnnouncementBar + Navbar + Footer)
    page.tsx                ← Home
    products/
      page.tsx              ← Listado
      [id]/page.tsx         ← Detalle
    cart/page.tsx
    checkout/page.tsx
  components/
    layout/
      AnnouncementBar.tsx   ← Barra top dark ("Trusted Shipping | Easy Returns")
      Navbar.tsx            ← Logo, SearchBar, CartIcon, WishlistIcon, UserMenu
      Footer.tsx
    home/
      HeroBanner.tsx        ← Full-width banner con texto overlay + flecha scroll
      CategoryGrid.tsx      ← Grid de categorías: PC, Monitores, Teclados, Mouse...
      FeaturedProducts.tsx  ← Sección "Más vendidos"
    products/
      ProductCard.tsx       ← Card con imagen, badge "New Arrival", marca, nombre, precio, stock
      ProductGrid.tsx       ← Grid 3 cols (desktop), 2 cols (tablet), 1 col (mobile)
      FilterSidebar.tsx     ← Marca (checkboxes+search), Precio (Slider), Categoría
      SortBar.tsx           ← Toggle lista/grid + "Sort by: Popular" Select
    product/
      ImageGallery.tsx      ← Galería principal + thumbnails
      ProductInfo.tsx       ← Nombre, precio, specs, botón Add to Cart (visual)
    cart/
      CartItem.tsx
      OrderSummary.tsx
    checkout/
      CheckoutForm.tsx
  lib/
    mock-data.ts            ← Datos estáticos (products, categories, brands)
  types/
    index.ts                ← tipos Product, Category, Brand, CartItem
```

---

## Paso 3 — Mock Data (`src/lib/mock-data.ts`)

Tipos de producto con campos:
- `id`, `name`, `brand`, `category`, `price`, `originalPrice`, `stock`, `isNew`, `images[]`, `specs{}`

Categorías: PC de escritorio, Laptops, Monitores, Teclados, Mouse, Auriculares, Almacenamiento
Marcas: Dell, HP, Logitech, Corsair, Razer, Samsung, LG, ASUS, MSI

---

## Paso 4 — Design Tokens (Tailwind)

Colores basados en la captura:
- **Accent**: `teal-500` / `#14b8a6` — precios, links, badges
- **Dark bar**: `zinc-900` — AnnouncementBar
- **Cards**: fondo `white`, `rounded-xl`, sombra suave
- **Badge "New Arrival"**: fondo `teal-500`, texto blanco, pequeño pill

---

## Paso 5 — Componentes clave (detalles)

### `ProductCard`
```
┌─────────────────────┐
│ [New Arrival badge] │
│   <Product image>   │
│  ❤ (wishlist)      │
├─────────────────────┤
│ Brand name          │
│ Product Name        │
│ $999.99  12 left!  │
└─────────────────────┘
```

### `FilterSidebar`
- **Brand**: Input search + lista con checkbox + count badge
- **Price**: shadcn `Slider` doble con inputs de min/max
- **Category**: Checkboxes simples

### `Navbar`
- Logo (texto "TechStore" con ícono chip)
- `Input` search full width centrado
- Íconos: Cart (con badge count), Wishlist (con badge), User avatar

---

## Paso 6 — Páginas

### Home (`/`)
1. AnnouncementBar
2. Navbar
3. HeroBanner (imagen con texto "Potencia tu Setup")
4. CategoryGrid (6-8 categorías con íconos)
5. FeaturedProducts (grid 4 columnas, 8 productos)
6. Footer

### Products (`/products`)
1. Navbar
2. Breadcrumb: Home > Categoría
3. Título "XX resultados para [categoría]"
4. Layout: `grid grid-cols-[280px_1fr]`
   - Left: FilterSidebar
   - Right: SortBar + ProductGrid

### Product Detail (`/products/[id]`)
1. Breadcrumb
2. Layout 2 cols: ImageGallery | ProductInfo
3. Tabs: Descripción / Especificaciones
4. RelatedProducts carousel

### Cart (`/cart`)
1. Layout 2 cols: CartItems list | OrderSummary
2. CartItem: imagen, nombre, precio, qty selector (visual), remove

### Checkout (`/checkout`)
1. Layout 2 cols: CheckoutForm | OrderSummary
2. Form: Datos personales, Dirección, Método de pago (visual)

---

## Archivos críticos a crear

| Archivo | Descripción |
|---------|-------------|
| `src/types/index.ts` | Tipos TypeScript |
| `src/lib/mock-data.ts` | ~15 productos mock con todas las categorías |
| `src/components/layout/AnnouncementBar.tsx` | |
| `src/components/layout/Navbar.tsx` | |
| `src/components/layout/Footer.tsx` | |
| `src/components/home/HeroBanner.tsx` | |
| `src/components/home/CategoryGrid.tsx` | |
| `src/components/home/FeaturedProducts.tsx` | |
| `src/components/products/ProductCard.tsx` | |
| `src/components/products/ProductGrid.tsx` | |
| `src/components/products/FilterSidebar.tsx` | |
| `src/components/products/SortBar.tsx` | |
| `src/components/product/ImageGallery.tsx` | |
| `src/components/product/ProductInfo.tsx` | |
| `src/components/cart/CartItem.tsx` | |
| `src/components/cart/OrderSummary.tsx` | |
| `src/components/checkout/CheckoutForm.tsx` | |
| `src/app/layout.tsx` | Root layout |
| `src/app/page.tsx` | Home page |
| `src/app/products/page.tsx` | Product listing |
| `src/app/products/[id]/page.tsx` | Product detail |
| `src/app/cart/page.tsx` | Cart |
| `src/app/checkout/page.tsx` | Checkout |

---

## Verificación

1. `npm run dev` → `localhost:3000` muestra Home con Hero + Categorías + Productos
2. Navegar a `/products` → grid de productos con filtros sidebar funcionales (UI)
3. Click en producto → redirige a `/products/[id]` con galería e info
4. Navegar a `/cart` → lista de items de ejemplo
5. Navegar a `/checkout` → formulario visual completo
6. Responsive: mobile drawer para filtros (shadcn `Sheet`)