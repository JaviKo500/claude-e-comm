"use client";

import Link from "next/link";
import { Cpu, Search, ShoppingCart, Heart, User, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Cpu className="w-7 h-7 text-teal-500" />
          <span className="font-bold text-xl text-zinc-900 hidden sm:block">TechStore</span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-auto hidden md:flex relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <Input
            placeholder="Buscar productos, marcas..."
            className="pl-9 bg-zinc-50 border-zinc-200 focus-visible:ring-teal-500"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 ml-auto">
          {/* Mobile search trigger */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="w-5 h-5" />
          </Button>

          {/* Wishlist */}
          <Button variant="ghost" size="icon" className="relative hidden sm:flex">
            <Heart className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-[10px] bg-teal-500 hover:bg-teal-500">
              3
            </Badge>
          </Button>

          {/* Cart */}
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-[10px] bg-teal-500 hover:bg-teal-500">
                3
              </Badge>
            </Button>
          </Link>

          {/* User */}
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User className="w-5 h-5" />
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="sm:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <Cpu className="w-5 h-5 text-teal-500" /> TechStore
                </Link>
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <Input placeholder="Buscar..." className="pl-9" />
                </div>
                {["Laptops", "Monitores", "Teclados", "Mouse", "Auriculares", "Almacenamiento"].map((cat) => (
                  <Link key={cat} href="/products" className="text-zinc-600 hover:text-teal-500 transition-colors">
                    {cat}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Category nav */}
      <div className="border-t border-zinc-100 hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex gap-6 text-sm py-2">
            {["Todas las categorías", "Laptops", "PCs de Escritorio", "Monitores", "Teclados", "Mouse", "Auriculares", "Almacenamiento", "Ofertas 🔥"].map((item) => (
              <Link
                key={item}
                href="/products"
                className="text-zinc-600 hover:text-teal-500 transition-colors whitespace-nowrap py-1"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
