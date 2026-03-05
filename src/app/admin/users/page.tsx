"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { adminUsers } from "@/lib/admin-mock-data";
import { UserRole, UserStatus } from "@/types";

const roleStyles: Record<UserRole, string> = {
  admin: "bg-teal-100 text-teal-700",
  customer: "bg-zinc-100 text-zinc-600",
};

const roleLabels: Record<UserRole, string> = {
  admin: "Admin",
  customer: "Cliente",
};

const statusStyles: Record<UserStatus, string> = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-zinc-100 text-zinc-500",
  banned: "bg-red-100 text-red-700",
};

const statusLabels: Record<UserStatus, string> = {
  active: "Activo",
  inactive: "Inactivo",
  banned: "Bloqueado",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const filtered = adminUsers.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === "all" || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Usuarios</h1>
        <p className="text-sm text-zinc-500 mt-1">{adminUsers.length} usuarios registrados</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <Input
            placeholder="Buscar por nombre o email..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">Todos los roles</option>
          <option value="admin">Admin</option>
          <option value="customer">Cliente</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-zinc-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50">
                <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Usuario</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Rol</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Estado</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Registro</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Pedidos</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-zinc-400 uppercase tracking-wide">Total gastado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {getInitials(user.name)}
                      </div>
                      <div>
                        <div className="font-medium text-zinc-800">{user.name}</div>
                        <div className="text-xs text-zinc-400">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${roleStyles[user.role]}`}>
                      {roleLabels[user.role]}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[user.status]}`}>
                      {statusLabels[user.status]}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-500">{user.joined}</td>
                  <td className="px-6 py-4 text-right text-zinc-700 font-medium">{user.orders}</td>
                  <td className="px-6 py-4 text-right font-semibold text-zinc-800">
                    {user.spent > 0 ? `$${user.spent.toLocaleString("en-US", { minimumFractionDigits: 2 })}` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-zinc-400 text-sm">No se encontraron usuarios</div>
        )}
      </div>
    </div>
  );
}
