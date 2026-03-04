"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import FilterSidebar from "@/components/products/FilterSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import SortBar from "@/components/products/SortBar";
import { products } from "@/lib/mock-data";

export default function ProductsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Inicio</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="w-4 h-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Todos los productos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-bold text-zinc-900 mb-6">
        {products.length} productos encontrados
      </h1>

      {/* Layout: sidebar + content */}
      <div className="flex gap-8">
        {/* Sidebar — desktop only */}
        <aside className="hidden md:block w-64 shrink-0">
          <FilterSidebar />
        </aside>

        {/* Product listing */}
        <div className="flex-1 min-w-0">
          <SortBar total={products.length} view={view} onViewChange={setView} />
          <ProductGrid products={products} view={view} />
        </div>
      </div>
    </div>
  );
}
