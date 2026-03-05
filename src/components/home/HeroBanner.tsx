"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Shield, Truck } from "lucide-react";

const slides = [
  {
    id: 0,
    badge: "Gaming Setup del año",
    title: "Potencia tu",
    highlight: "Setup",
    description: "Encuentra el equipamiento perfecto para gaming, trabajo y creatividad. Las mejores marcas al mejor precio.",
    cta: { label: "Ver productos", href: "/products" },
    ctaSecondary: { label: "Laptops en oferta", href: "/products?category=laptops" },
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80",
    imageAlt: "Gaming laptop",
    badge2: "Hasta 30% OFF",
    productName: "Dell XPS 15",
    productPrice: "$1,899.99",
    productOriginal: "$2,199.99",
    from: "from-zinc-900",
    via: "via-zinc-800",
  },
  {
    id: 1,
    badge: "Monitor del mes",
    title: "Gaming en",
    highlight: "4K 144Hz",
    description: "Domina cada partida con monitores de alta resolución y respuesta ultrarrápida. Sumérgete en colores vibrantes.",
    cta: { label: "Ver monitores", href: "/products?category=monitors" },
    ctaSecondary: { label: "Comparar modelos", href: "/products" },
    image: "https://images.unsplash.com/photo-1527443224154-c4a573d5dd55?w=500&q=80",
    imageAlt: "Gaming monitor",
    badge2: "Nuevo ingreso",
    productName: "ASUS ROG Swift",
    productPrice: "$649.99",
    productOriginal: "$799.99",
    from: "from-blue-950",
    via: "via-zinc-900",
  },
  {
    id: 2,
    badge: "Almacenamiento NVMe",
    title: "Velocidad",
    highlight: "Extrema",
    description: "SSDs NVMe con velocidades de lectura de hasta 7,450 MB/s. Tu sistema nunca fue tan rápido.",
    cta: { label: "Ver SSDs", href: "/products?category=storage" },
    ctaSecondary: { label: "Ver componentes", href: "/products" },
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&q=80",
    imageAlt: "NVMe SSD",
    badge2: "18% OFF",
    productName: "Samsung 990 Pro",
    productPrice: "$179.99",
    productOriginal: "$219.99",
    from: "from-teal-950",
    via: "via-zinc-900",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      className="relative overflow-hidden bg-zinc-900 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`transition-opacity duration-700 ${
              i === current ? "opacity-100 relative" : "opacity-0 absolute inset-0"
            }`}
            aria-hidden={i !== current}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.from} ${slide.via} to-zinc-900`} />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 py-12 md:py-14 relative">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Text */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm px-3 py-1 rounded-full mb-5">
                    <Zap className="w-3 h-3" />
                    {slide.badge}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                    {slide.title}
                    <span className="text-teal-400 block">{slide.highlight}</span>
                  </h1>
                  <p className="text-zinc-400 text-lg mb-7 leading-relaxed">{slide.description}</p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Link href={slide.cta.href}>
                      <Button size="lg" className="bg-teal-500 hover:bg-teal-400 text-white gap-2">
                        {slide.cta.label} <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href={slide.ctaSecondary.href}>
                      <Button size="lg" variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800">
                        {slide.ctaSecondary.label}
                      </Button>
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
                    <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-teal-400" />Envío gratis +$999</div>
                    <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-teal-400" />Garantía oficial</div>
                    <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-teal-400" />Stock inmediato</div>
                  </div>
                </div>

                {/* Product showcase */}
                <div className="relative hidden md:block">
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl border border-zinc-700 overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.imageAlt}
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-teal-500 text-white text-sm font-bold px-4 py-2 rounded-2xl shadow-lg">
                      {slide.badge2}
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-white text-zinc-900 p-4 rounded-2xl shadow-xl">
                      <div className="text-xs text-zinc-400 mb-1">{slide.productName}</div>
                      <div className="text-xl font-bold text-teal-600">{slide.productPrice}</div>
                      <div className="text-xs line-through text-zinc-400">{slide.productOriginal}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-6 h-2 bg-teal-400" : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
