import Link from "next/link";
import { Monitor, Laptop, MonitorDot, Keyboard, MousePointer2, Headphones, HardDrive, Cpu } from "lucide-react";
import { categories } from "@/lib/mock-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Laptop,
  MonitorDot,
  Keyboard,
  MousePointer2,
  Headphones,
  HardDrive,
  Cpu,
};

const categoryColors = [
  "from-blue-500/10 to-blue-600/5 border-blue-200 hover:border-blue-400",
  "from-purple-500/10 to-purple-600/5 border-purple-200 hover:border-purple-400",
  "from-teal-500/10 to-teal-600/5 border-teal-200 hover:border-teal-400",
  "from-orange-500/10 to-orange-600/5 border-orange-200 hover:border-orange-400",
  "from-pink-500/10 to-pink-600/5 border-pink-200 hover:border-pink-400",
  "from-indigo-500/10 to-indigo-600/5 border-indigo-200 hover:border-indigo-400",
  "from-green-500/10 to-green-600/5 border-green-200 hover:border-green-400",
  "from-red-500/10 to-red-600/5 border-red-200 hover:border-red-400",
];

const iconColors = [
  "text-blue-500",
  "text-purple-500",
  "text-teal-500",
  "text-orange-500",
  "text-pink-500",
  "text-indigo-500",
  "text-green-500",
  "text-red-500",
];

export default function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">Categorías</h2>
          <p className="text-zinc-500 mt-1">Explora por tipo de producto</p>
        </div>
        <Link href="/products" className="text-teal-500 hover:text-teal-600 text-sm font-medium">
          Ver todas →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category, index) => {
          const Icon = iconMap[category.icon] ?? Cpu;
          return (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border bg-gradient-to-br transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${categoryColors[index % categoryColors.length]}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${iconColors[index % iconColors.length]}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-zinc-800 text-sm leading-tight">{category.name}</div>
                <div className="text-zinc-400 text-xs mt-0.5">{category.count} productos</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
