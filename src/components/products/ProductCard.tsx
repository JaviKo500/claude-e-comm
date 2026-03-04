import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <Card className="group overflow-hidden rounded-xl border border-zinc-100 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 p-0">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square bg-zinc-50 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.isNew && (
              <Badge className="bg-teal-500 hover:bg-teal-500 text-white text-xs px-2 py-0.5">
                New Arrival
              </Badge>
            )}
            {discount && (
              <Badge className="bg-red-500 hover:bg-red-500 text-white text-xs px-2 py-0.5">
                -{discount}%
              </Badge>
            )}
          </div>
          {/* Wishlist */}
          <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
            <Heart className="w-4 h-4" />
          </button>
          {/* Stock warning */}
          {product.stock <= 5 && (
            <div className="absolute bottom-3 left-3 right-3">
              <div className="bg-orange-500/90 text-white text-xs px-2 py-1 rounded-full text-center">
                ¡Solo {product.stock} restantes!
              </div>
            </div>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <div className="text-xs text-zinc-400 mb-1">{product.brand}</div>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium text-zinc-900 text-sm leading-snug mb-2 hover:text-teal-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-zinc-200"}`}
              />
            ))}
          </div>
          <span className="text-xs text-zinc-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-teal-600">
              ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-zinc-400 line-through">
                ${product.originalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </div>
            )}
          </div>
          <Button size="sm" className="bg-teal-500 hover:bg-teal-400 text-white rounded-lg h-8 w-8 p-0">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
