import Link from "next/link";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";
import { mockCartItems } from "@/lib/mock-data";

export default function CartPage() {
  const items = mockCartItems;

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Inicio</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator><ChevronRight className="w-4 h-4" /></BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Carrito</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-bold text-zinc-900 mb-6">
        Tu carrito ({items.length} {items.length === 1 ? "producto" : "productos"})
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-24">
          <ShoppingBag className="w-16 h-16 text-zinc-200 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-zinc-400 mb-2">Tu carrito está vacío</h2>
          <p className="text-zinc-400 mb-6">Agrega productos para comenzar</p>
          <Link href="/products">
            <Button className="bg-teal-500 hover:bg-teal-400 text-white">Explorar productos</Button>
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Items */}
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
            <div className="divide-y divide-zinc-50">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100">
              <Link href="/products">
                <Button variant="outline" className="text-sm">← Seguir comprando</Button>
              </Link>
            </div>
          </div>

          {/* Summary */}
          <OrderSummary items={items} />
        </div>
      )}
    </div>
  );
}
