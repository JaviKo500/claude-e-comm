"use client";

import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, Package } from "lucide-react";
import { dashboardStats, adminOrders, topProducts } from "@/lib/admin-mock-data";

const statusStyles: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-zinc-100 text-zinc-600",
  refunded: "bg-red-100 text-red-700",
};

const statusLabels: Record<string, string> = {
  pending: "Pendiente",
  processing: "Procesando",
  shipped: "Enviado",
  delivered: "Entregado",
  cancelled: "Cancelado",
  refunded: "Reembolsado",
};

const statCards = [
  {
    label: "Ingresos",
    key: "revenue" as const,
    icon: DollarSign,
    format: (v: number) => `$${v.toLocaleString("en-US", { minimumFractionDigits: 2 })}`,
  },
  {
    label: "Pedidos",
    key: "orders" as const,
    icon: ShoppingBag,
    format: (v: number) => v.toString(),
  },
  {
    label: "Usuarios",
    key: "users" as const,
    icon: Users,
    format: (v: number) => v.toString(),
  },
  {
    label: "Productos",
    key: "products" as const,
    icon: Package,
    format: (v: number) => v.toString(),
  },
];

export default function AdminDashboard() {
  const recentOrders = adminOrders.slice(0, 7);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Dashboard</h1>
        <p className="text-sm text-zinc-500 mt-1">Resumen de actividad — marzo 2026</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map(({ label, key, icon: Icon, format }) => {
          const stat = dashboardStats[key];
          const isPositive = stat.change >= 0;
          return (
            <div key={key} className="bg-white rounded-xl border border-zinc-100 shadow-sm p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-teal-50 rounded-lg p-2">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                    isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                  }`}
                >
                  {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {Math.abs(stat.change)}%
                </span>
              </div>
              <div className="text-2xl font-bold text-zinc-900">{format(stat.value)}</div>
              <div className="text-sm text-zinc-500 mt-1">{label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid xl:grid-cols-[1fr_320px] gap-6">
        {/* Recent orders */}
        <div className="bg-white rounded-xl border border-zinc-100 shadow-sm">
          <div className="px-6 py-4 border-b border-zinc-100">
            <h2 className="font-semibold text-zinc-900">Pedidos recientes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-100">
                  <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">ID</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Cliente</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Fecha</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Estado</th>
                  <th className="text-right px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-zinc-50 transition-colors">
                    <td className="px-6 py-3 font-mono text-zinc-500">{order.id}</td>
                    <td className="px-6 py-3 font-medium text-zinc-800">{order.customer}</td>
                    <td className="px-6 py-3 text-zinc-500">{order.date}</td>
                    <td className="px-6 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}>
                        {statusLabels[order.status]}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-right font-semibold text-zinc-800">
                      ${order.total.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top products */}
        <div className="bg-white rounded-xl border border-zinc-100 shadow-sm">
          <div className="px-6 py-4 border-b border-zinc-100">
            <h2 className="font-semibold text-zinc-900">Top productos</h2>
          </div>
          <div className="divide-y divide-zinc-50">
            {topProducts.map((p, i) => (
              <div key={p.id} className="px-6 py-4 flex items-center gap-3">
                <span className="w-6 h-6 bg-zinc-100 rounded-full text-xs font-bold text-zinc-500 flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-zinc-800 truncate">{p.name}</div>
                  <div className="text-xs text-zinc-400">{p.category} · {p.sold} vendidos</div>
                </div>
                <div className="text-sm font-semibold text-teal-600 shrink-0">
                  ${p.revenue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
