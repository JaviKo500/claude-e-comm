import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/mock-data";

export default function FeaturedProducts() {
  const featured = products.slice(0, 8);

  return (
    <section className="bg-zinc-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">Más vendidos</h2>
            <p className="text-zinc-500 mt-1">Los favoritos de nuestra comunidad</p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="gap-2 hidden sm:flex border-teal-200 text-teal-600 hover:bg-teal-50">
              Ver todos <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link href="/products">
            <Button variant="outline" className="gap-2 border-teal-200 text-teal-600">
              Ver todos los productos <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
