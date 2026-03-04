"use client";

import { useState } from "react";
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import FilterSidebar from "./FilterSidebar";

interface SortBarProps {
  total: number;
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}

export default function SortBar({ total, view, onViewChange }: SortBarProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-zinc-100 mb-6">
      <div className="flex items-center gap-3">
        {/* Mobile filter button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="md:hidden gap-2">
              <SlidersHorizontal className="w-4 h-4" /> Filtros
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <FilterSidebar />
            </div>
          </SheetContent>
        </Sheet>

        <span className="text-sm text-zinc-500">
          <span className="font-semibold text-zinc-900">{total}</span> productos
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Select defaultValue="popular">
          <SelectTrigger className="w-44 h-9 text-sm">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Más populares</SelectItem>
            <SelectItem value="newest">Más nuevos</SelectItem>
            <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
            <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
            <SelectItem value="rating">Mejor calificados</SelectItem>
          </SelectContent>
        </Select>

        {/* View toggle */}
        <div className="flex border border-zinc-200 rounded-lg overflow-hidden">
          <Button
            variant={view === "grid" ? "default" : "ghost"}
            size="icon"
            className={`h-9 w-9 rounded-none ${view === "grid" ? "bg-teal-500 hover:bg-teal-400" : ""}`}
            onClick={() => onViewChange("grid")}
          >
            <LayoutGrid className="w-4 h-4" />
          </Button>
          <Button
            variant={view === "list" ? "default" : "ghost"}
            size="icon"
            className={`h-9 w-9 rounded-none ${view === "list" ? "bg-teal-500 hover:bg-teal-400" : ""}`}
            onClick={() => onViewChange("list")}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
