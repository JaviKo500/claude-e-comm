import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/types";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-4 border-b border-zinc-100 last:border-0">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="w-20 h-20 shrink-0 bg-zinc-50 rounded-xl overflow-hidden">
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
        </div>
      </Link>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="text-xs text-zinc-400 mb-0.5">{product.brand}</div>
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-medium text-zinc-900 hover:text-teal-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-zinc-200 rounded-lg overflow-hidden">
            <button className="w-7 h-7 flex items-center justify-center hover:bg-zinc-50 text-zinc-600 text-sm">−</button>
            <div className="w-8 h-7 flex items-center justify-center text-sm font-medium border-x border-zinc-200">
              {quantity}
            </div>
            <button className="w-7 h-7 flex items-center justify-center hover:bg-zinc-50 text-zinc-600 text-sm">+</button>
          </div>

          {/* Price + delete */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-bold text-teal-600">
                ${(product.price * quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </div>
              {quantity > 1 && (
                <div className="text-xs text-zinc-400">
                  ${product.price.toFixed(2)} c/u
                </div>
              )}
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-zinc-400 hover:text-red-500">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
