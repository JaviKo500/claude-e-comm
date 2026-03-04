"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { brands, categories } from "@/lib/mock-data";

interface FilterSection {
  title: string;
  open: boolean;
}

export default function FilterSidebar() {
  const [sections, setSections] = useState<Record<string, boolean>>({
    categories: true,
    brands: true,
    price: true,
  });
  const [brandSearch, setBrandSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggle = (key: string) =>
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const toggleBrand = (name: string) =>
    setSelectedBrands((prev) =>
      prev.includes(name) ? prev.filter((b) => b !== name) : [...prev, name]
    );

  const toggleCategory = (slug: string) =>
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug]
    );

  const filteredBrands = brands.filter((b) =>
    b.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const totalActive = selectedBrands.length + selectedCategories.length;

  return (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-zinc-900">Filtros</h2>
        {totalActive > 0 && (
          <button
            onClick={() => { setSelectedBrands([]); setSelectedCategories([]); setPriceRange([0, 3000]); }}
            className="text-xs text-teal-500 hover:text-teal-600"
          >
            Limpiar ({totalActive})
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-2">
        <button
          onClick={() => toggle("categories")}
          className="flex items-center justify-between w-full py-2 text-sm font-medium text-zinc-800"
        >
          Categoría
          {sections.categories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {sections.categories && (
          <div className="mt-2 space-y-2">
            {categories.map((cat) => (
              <label key={cat.id} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.slug)}
                  onChange={() => toggleCategory(cat.slug)}
                  className="w-4 h-4 rounded border-zinc-300 text-teal-500 focus:ring-teal-500"
                />
                <span className="text-sm text-zinc-600 group-hover:text-zinc-900 flex-1">{cat.name}</span>
                <Badge variant="secondary" className="text-xs px-1.5 py-0 h-5">{cat.count}</Badge>
              </label>
            ))}
          </div>
        )}
      </div>

      <Separator className="my-3" />

      {/* Brands */}
      <div className="mb-2">
        <button
          onClick={() => toggle("brands")}
          className="flex items-center justify-between w-full py-2 text-sm font-medium text-zinc-800"
        >
          Marca
          {sections.brands ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {sections.brands && (
          <div className="mt-2 space-y-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
              <Input
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
                placeholder="Buscar marca..."
                className="pl-8 h-8 text-sm"
              />
            </div>
            {filteredBrands.map((brand) => (
              <label key={brand.id} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.name)}
                  onChange={() => toggleBrand(brand.name)}
                  className="w-4 h-4 rounded border-zinc-300 text-teal-500 focus:ring-teal-500"
                />
                <span className="text-sm text-zinc-600 group-hover:text-zinc-900 flex-1">{brand.name}</span>
                <Badge variant="secondary" className="text-xs px-1.5 py-0 h-5">{brand.count}</Badge>
              </label>
            ))}
          </div>
        )}
      </div>

      <Separator className="my-3" />

      {/* Price */}
      <div>
        <button
          onClick={() => toggle("price")}
          className="flex items-center justify-between w-full py-2 text-sm font-medium text-zinc-800"
        >
          Precio
          {sections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {sections.price && (
          <div className="mt-4 px-1">
            <Slider
              min={0}
              max={3000}
              step={50}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-4"
            />
            <div className="flex items-center gap-2">
              <div className="flex-1 border border-zinc-200 rounded-md px-2 py-1 text-sm text-center">
                ${priceRange[0]}
              </div>
              <span className="text-zinc-400 text-sm">—</span>
              <div className="flex-1 border border-zinc-200 rounded-md px-2 py-1 text-sm text-center">
                ${priceRange[1]}
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
