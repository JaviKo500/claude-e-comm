import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import ImageGallery from "@/components/product/ImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/mock-data";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Inicio</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator><ChevronRight className="w-4 h-4" /></BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/products">Productos</Link></BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator><ChevronRight className="w-4 h-4" /></BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="truncate max-w-[200px]">{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Product detail grid */}
      <div className="grid md:grid-cols-2 gap-10 mb-14">
        <ImageGallery images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </div>

      {/* Tabs: description & specs */}
      <div className="mb-14">
        <div className="border-b border-zinc-200 mb-6">
          <div className="flex gap-0">
            {["Descripción", "Especificaciones"].map((tab, i) => (
              <div
                key={tab}
                className={`px-6 py-3 text-sm font-medium cursor-pointer border-b-2 transition-colors ${
                  i === 0
                    ? "border-teal-500 text-teal-600"
                    : "border-transparent text-zinc-500 hover:text-zinc-700"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">Descripción</h3>
            <p className="text-zinc-600 leading-relaxed">{product.description}</p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">Especificaciones técnicas</h3>
            <dl className="space-y-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex gap-3 text-sm">
                  <dt className="text-zinc-400 w-32 shrink-0">{key}</dt>
                  <dd className="text-zinc-800 font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Productos relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}
