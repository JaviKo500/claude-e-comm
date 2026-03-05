"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cpu, LayoutDashboard, Package, ShoppingBag, Users, ExternalLink } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Productos", icon: Package },
  { href: "/admin/orders", label: "Pedidos", icon: ShoppingBag },
  { href: "/admin/users", label: "Usuarios", icon: Users },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-64 h-full bg-zinc-900 text-white">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 h-14 border-b border-zinc-800 shrink-0">
        <Cpu className="w-5 h-5 text-teal-500" />
        <span className="font-bold text-sm">TechStore Admin</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-teal-500/20 text-teal-400 border-l-2 border-teal-500 pl-[10px]"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-zinc-800">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Ver tienda
        </Link>
      </div>
    </aside>
  );
}
