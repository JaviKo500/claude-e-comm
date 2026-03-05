"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { adminOrders } from "@/lib/admin-mock-data";
import { OrderStatus, PaymentStatus } from "@/types";

const orderStatusStyles: Record<OrderStatus, string> = {
  pending: "bg-amber-100 text-amber-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-zinc-100 text-zinc-600",
  refunded: "bg-red-100 text-red-700",
};

const orderStatusLabels: Record<OrderStatus, string> = {
  pending: "Pendiente",
  processing: "Procesando",
  shipped: "Enviado",
  delivered: "Entregado",
  cancelled: "Cancelado",
  refunded: "Reembolsado",
};

const paymentStatusStyles: Record<PaymentStatus, string> = {
  pending: "bg-amber-100 text-amber-700",
  paid: "bg-green-100 text-green-700",
  failed: "bg-red-100 text-red-700",
  refunded: "bg-zinc-100 text-zinc-600",
};

const paymentStatusLabels: Record<PaymentStatus, string> = {
  pending: "Pendiente",
  paid: "Pagado",
  failed: "Fallido",
  refunded: "Reembolsado",
};

const allStatuses: Array<{ value: string; label: string }> = [
  { value: "all", label: "Todos los estados" },
  { value: "pending", label: "Pendiente" },
  { value: "processing", label: "Procesando" },
  { value: "shipped", label: "Enviado" },
  { value: "delivered", label: "Entregado" },
  { value: "cancelled", label: "Cancelado" },
  { value: "refunded", label: "Reembolsado" },
];

export default function AdminOrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = adminOrders.filter((o) => {
    const matchesSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Pedidos</h1>
        <p className="text-sm text-zinc-500 mt-1">{adminOrders.length} pedidos en total</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <Input
            placeholder="Buscar por ID o cliente..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {allStatuses.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-zinc-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50">
                <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">ID</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Cliente</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Fecha</th>
                <th className="text-center px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Items</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Estado</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Pago</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {filtered.map((order) => (
                <tr key={order.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-zinc-500 text-xs">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-zinc-800">{order.customer}</div>
                    <div className="text-xs text-zinc-400">{order.email}</div>
                  </td>
                  <td className="px-6 py-4 text-zinc-500">{order.date}</td>
                  <td className="px-6 py-4 text-center text-zinc-500">{order.items}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${orderStatusStyles[order.status]}`}>
                      {orderStatusLabels[order.status]}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${paymentStatusStyles[order.paymentStatus]}`}>
                      {paymentStatusLabels[order.paymentStatus]}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-zinc-800">
                    ${order.total.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-zinc-400 text-sm">No se encontraron pedidos</div>
        )}
      </div>
    </div>
  );
}
