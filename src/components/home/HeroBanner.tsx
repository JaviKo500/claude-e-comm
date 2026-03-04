import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Zap, Shield, Truck } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm px-3 py-1 rounded-full mb-6">
              <Zap className="w-3 h-3" />
              Nuevos productos cada semana
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Potencia tu
              <span className="text-teal-400 block">Setup</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Encuentra el equipamiento perfecto para gaming, trabajo y creatividad. Las mejores marcas al mejor precio.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/products">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-400 text-white gap-2">
                  Ver productos <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/products?category=laptops">
                <Button size="lg" variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800">
                  Laptops en oferta
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-teal-400" />
                Envío gratis +$999
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-400" />
                Garantía oficial
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-teal-400" />
                Stock inmediato
              </div>
            </div>
          </div>

          {/* Hero product showcase */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main product card */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl border border-zinc-700 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80"
                  alt="Featured laptop"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-teal-500 text-white text-sm font-bold px-4 py-2 rounded-2xl shadow-lg">
                Hasta 30% OFF
              </div>
              {/* Floating price card */}
              <div className="absolute -bottom-4 -left-4 bg-white text-zinc-900 p-4 rounded-2xl shadow-xl">
                <div className="text-xs text-zinc-400 mb-1">Dell XPS 15</div>
                <div className="text-xl font-bold text-teal-600">$1,899.99</div>
                <div className="text-xs line-through text-zinc-400">$2,199.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-zinc-500" />
      </div>
    </section>
  );
}
