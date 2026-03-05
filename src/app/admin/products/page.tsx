"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { products } from "@/lib/mock-data";
import { categories } from "@/lib/mock-data";

const categoryLabels: Record<string, string> = {
  laptops: "Laptops",
  monitors: "Monitores",
  keyboards: "Teclados",
  mouse: "Mouse",
  headsets: "Auriculares",
  storage: "Almacenamiento",
  desktop: "Desktop",
  components: "Componentes",
};

export default function AdminProductsPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [dialogOpen, setDialogOpen] = useState(false);

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "all" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Productos</h1>
          <p className="text-sm text-zinc-500 mt-1">{products.length} productos en catálogo</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-teal-500 hover:bg-teal-400 text-white gap-2">
              <Plus className="w-4 h-4" /> Agregar producto
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Nuevo producto</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-sm font-medium text-zinc-700 mb-1 block">Nombre</label>
                  <Input placeholder="Ej. Dell XPS 15 9530" />
                </div>
                <div>
                  <label className="text-sm font-medium text-zinc-700 mb-1 block">Marca</label>
                  <Input placeholder="Ej. Dell" />
                </div>
                <div>
                  <label className="text-sm font-medium text-zinc-700 mb-1 block">Categoría</label>
                  <select className="w-full border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                    {categories.map((c) => (
                      <option key={c.id} value={c.slug}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-zinc-700 mb-1 block">Precio ($)</label>
                  <Input type="number" placeholder="0.00" />
                </div>
                <div>
                  <label className="text-sm font-medium text-zinc-700 mb-1 block">Stock</label>
                  <Input type="number" placeholder="0" />
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium text-zinc-700 mb-1 block">Descripción</label>
                  <textarea
                    rows={3}
                    placeholder="Descripción del producto..."
                    className="w-full border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
                <Button className="bg-teal-500 hover:bg-teal-400 text-white" onClick={() => setDialogOpen(false)}>
                  Guardar producto
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <Input
            placeholder="Buscar productos..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">Todas las categorías</option>
          {categories.map((c) => (
            <option key={c.id} value={c.slug}>{c.name}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-zinc-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50">
                <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Producto</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Categoría</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Marca</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Precio</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Stock</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Rating</th>
                <th className="text-center px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover bg-zinc-100"
                      />
                      <div>
                        <div className="font-medium text-zinc-800 line-clamp-1">{product.name}</div>
                        {product.isNew && (
                          <span className="text-xs bg-teal-500 text-white px-1.5 py-0.5 rounded-full">Nuevo</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-500">{categoryLabels[product.category] ?? product.category}</td>
                  <td className="px-6 py-4 text-zinc-500">{product.brand}</td>
                  <td className="px-6 py-4 text-right font-semibold text-zinc-800">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`font-medium ${product.stock <= 5 ? "text-red-500" : "text-zinc-700"}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-zinc-500">⭐ {product.rating}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="ghost" size="icon" className="w-8 h-8 text-zinc-400 hover:text-teal-600">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-8 h-8 text-zinc-400 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-zinc-400 text-sm">No se encontraron productos</div>
        )}
      </div>
    </div>
  );
}
