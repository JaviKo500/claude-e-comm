import { ShoppingCart, Heart, Share2, Star, Shield, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="flex flex-col gap-5">
      {/* Badges */}
      <div className="flex gap-2 flex-wrap">
        {product.isNew && (
          <Badge className="bg-teal-500 hover:bg-teal-500 text-white">New Arrival</Badge>
        )}
        {discount && (
          <Badge className="bg-red-500 hover:bg-red-500 text-white">-{discount}% OFF</Badge>
        )}
        <Badge variant="outline" className="text-zinc-500">{product.brand}</Badge>
      </div>

      {/* Name */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 leading-tight">{product.name}</h1>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-zinc-200"}`}
              />
            ))}
          </div>
          <span className="text-sm text-zinc-500">{product.rating} · {product.reviews} reseñas</span>
        </div>
      </div>

      {/* Price */}
      <div>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-teal-600">
            ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-zinc-400 line-through">
              ${product.originalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
          )}
        </div>
        {discount && (
          <p className="text-sm text-green-600 font-medium mt-1">
            Ahorras ${(product.originalPrice! - product.price).toFixed(2)}
          </p>
        )}
      </div>

      {/* Stock */}
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${product.stock > 5 ? "bg-green-500" : "bg-orange-500"}`} />
        <span className="text-sm text-zinc-600">
          {product.stock > 5 ? `En stock (${product.stock} disponibles)` : `¡Solo ${product.stock} restantes!`}
        </span>
      </div>

      <Separator />

      {/* Description */}
      <p className="text-zinc-600 leading-relaxed">{product.description}</p>

      {/* Quick specs */}
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
          <div key={key} className="bg-zinc-50 rounded-lg p-3">
            <div className="text-xs text-zinc-400">{key}</div>
            <div className="text-sm font-medium text-zinc-800 mt-0.5">{value}</div>
          </div>
        ))}
      </div>

      {/* Quantity + CTA */}
      <div className="flex gap-3">
        <div className="flex items-center border border-zinc-200 rounded-lg overflow-hidden">
          <button className="w-10 h-11 flex items-center justify-center hover:bg-zinc-50 text-zinc-600 font-medium">−</button>
          <div className="w-10 h-11 flex items-center justify-center text-sm font-medium border-x border-zinc-200">1</div>
          <button className="w-10 h-11 flex items-center justify-center hover:bg-zinc-50 text-zinc-600 font-medium">+</button>
        </div>
        <Button className="flex-1 bg-teal-500 hover:bg-teal-400 text-white h-11 gap-2 text-base">
          <ShoppingCart className="w-5 h-5" /> Agregar al carrito
        </Button>
        <Button variant="outline" size="icon" className="h-11 w-11 shrink-0">
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      {/* Trust */}
      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          { icon: Shield, label: "Garantía oficial" },
          { icon: Truck, label: "Envío gratis" },
          { icon: RotateCcw, label: "30 días devolución" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1.5 p-3 bg-zinc-50 rounded-xl">
            <Icon className="w-5 h-5 text-teal-500" />
            <span className="text-xs text-zinc-600 font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
