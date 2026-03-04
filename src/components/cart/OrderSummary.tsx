import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CartItem } from "@/types";

interface OrderSummaryProps {
  items: CartItem[];
  isCheckout?: boolean;
}

export default function OrderSummary({ items, isCheckout = false }: OrderSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 999 ? 0 : 15.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm sticky top-24">
      <h2 className="font-semibold text-zinc-900 text-lg mb-4">Resumen del pedido</h2>

      {/* Items summary */}
      <div className="space-y-3 mb-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex justify-between text-sm">
            <span className="text-zinc-600 truncate pr-4">
              {item.product.name} <span className="text-zinc-400">x{item.quantity}</span>
            </span>
            <span className="font-medium shrink-0">
              ${(item.product.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      {/* Coupon */}
      {!isCheckout && (
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Tag className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
            <Input placeholder="Código de descuento" className="pl-8 h-9 text-sm" />
          </div>
          <Button variant="outline" className="h-9 shrink-0 text-sm">Aplicar</Button>
        </div>
      )}

      {/* Breakdown */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-500">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Envío</span>
          <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
            {shipping === 0 ? "Gratis" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">IVA (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between font-bold text-lg mb-5">
        <span>Total</span>
        <span className="text-teal-600">${total.toFixed(2)}</span>
      </div>

      {!isCheckout ? (
        <Link href="/checkout" className="block">
          <Button className="w-full bg-teal-500 hover:bg-teal-400 text-white gap-2">
            Proceder al pago <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      ) : null}

      {shipping > 0 && (
        <p className="text-xs text-zinc-400 text-center mt-3">
          Agrega ${(999 - subtotal).toFixed(2)} más para envío gratis
        </p>
      )}

      {/* Payment methods */}
      <div className="flex justify-center gap-3 mt-4 text-xs text-zinc-400">
        <span>💳 Visa</span>
        <span>💳 MC</span>
        <span>💳 PayPal</span>
      </div>
    </div>
  );
}
