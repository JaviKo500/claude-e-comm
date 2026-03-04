import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/cart/OrderSummary";
import { mockCartItems } from "@/lib/mock-data";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Inicio</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator><ChevronRight className="w-4 h-4" /></BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/cart">Carrito</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator><ChevronRight className="w-4 h-4" /></BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Checkout</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-bold text-zinc-900 mb-6">Finalizar compra</h1>

      <div className="grid lg:grid-cols-[1fr_380px] gap-8">
        <CheckoutForm />
        <OrderSummary items={mockCartItems} isCheckout />
      </div>
    </div>
  );
}
