"use client";

import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AdminSidebar from "./AdminSidebar";

const breadcrumbMap: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/products": "Productos",
  "/admin/orders": "Pedidos",
  "/admin/users": "Usuarios",
};

export default function AdminHeader() {
  const pathname = usePathname();
  const pageTitle = breadcrumbMap[pathname] ?? "Admin";

  return (
    <header className="h-14 border-b bg-white flex items-center px-4 gap-4 shrink-0">
      {/* Mobile hamburger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <AdminSidebar />
        </SheetContent>
      </Sheet>

      {/* Breadcrumb */}
      <div className="flex-1">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-zinc-400">Admin</span>
          {pageTitle !== "Dashboard" && (
            <>
              <span className="text-zinc-300">/</span>
              <span className="font-medium text-zinc-800">{pageTitle}</span>
            </>
          )}
          {pageTitle === "Dashboard" && (
            <span className="font-medium text-zinc-800">Dashboard</span>
          )}
        </div>
      </div>

      {/* Admin avatar */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
          A
        </div>
        <span className="text-sm font-medium text-zinc-700 hidden sm:block">Admin</span>
      </div>
    </header>
  );
}
