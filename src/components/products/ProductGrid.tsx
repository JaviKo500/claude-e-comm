import ProductCard from "./ProductCard";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  view?: "grid" | "list";
}

export default function ProductGrid({ products, view = "grid" }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-zinc-400">
        <div className="text-4xl mb-3">🔍</div>
        <div className="text-lg font-medium">Sin resultados</div>
        <div className="text-sm">Intenta con otros filtros</div>
      </div>
    );
  }

  return (
    <div
      className={
        view === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          : "flex flex-col gap-4"
      }
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
