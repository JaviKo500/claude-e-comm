import { AdminOrder, AdminUser, DashboardStats, TopProduct } from "@/types";

export const adminOrders: AdminOrder[] = [
  { id: "ORD-001", customer: "Carlos Martínez", email: "carlos@email.com", date: "2026-03-04", status: "delivered", paymentStatus: "paid", total: 1899.99, items: 1 },
  { id: "ORD-002", customer: "Ana López", email: "ana@email.com", date: "2026-03-03", status: "shipped", paymentStatus: "paid", total: 389.98, items: 2 },
  { id: "ORD-003", customer: "Juan García", email: "juan@email.com", date: "2026-03-03", status: "processing", paymentStatus: "paid", total: 649.99, items: 1 },
  { id: "ORD-004", customer: "María Torres", email: "maria@email.com", date: "2026-03-02", status: "pending", paymentStatus: "pending", total: 229.99, items: 1 },
  { id: "ORD-005", customer: "Luis Rodríguez", email: "luis@email.com", date: "2026-03-02", status: "delivered", paymentStatus: "paid", total: 1449.99, items: 1 },
  { id: "ORD-006", customer: "Sofía Pérez", email: "sofia@email.com", date: "2026-03-01", status: "cancelled", paymentStatus: "refunded", total: 139.99, items: 1 },
  { id: "ORD-007", customer: "Diego Sánchez", email: "diego@email.com", date: "2026-03-01", status: "delivered", paymentStatus: "paid", total: 2999.99, items: 1 },
  { id: "ORD-008", customer: "Valentina Cruz", email: "val@email.com", date: "2026-02-28", status: "shipped", paymentStatus: "paid", total: 549.99, items: 1 },
  { id: "ORD-009", customer: "Andrés Flores", email: "andres@email.com", date: "2026-02-28", status: "processing", paymentStatus: "paid", total: 359.98, items: 3 },
  { id: "ORD-010", customer: "Isabella Mora", email: "isa@email.com", date: "2026-02-27", status: "refunded", paymentStatus: "refunded", total: 99.99, items: 1 },
  { id: "ORD-011", customer: "Sebastián Ruiz", email: "seb@email.com", date: "2026-02-27", status: "delivered", paymentStatus: "paid", total: 899.99, items: 1 },
  { id: "ORD-012", customer: "Camila Vargas", email: "camila@email.com", date: "2026-02-26", status: "pending", paymentStatus: "pending", total: 179.99, items: 1 },
];

export const adminUsers: AdminUser[] = [
  { id: "USR-001", name: "Admin TechStore", email: "admin@techstore.com", role: "admin", status: "active", joined: "2025-01-01", orders: 0, spent: 0 },
  { id: "USR-002", name: "Carlos Martínez", email: "carlos@email.com", role: "customer", status: "active", joined: "2025-03-15", orders: 8, spent: 4299.92 },
  { id: "USR-003", name: "Ana López", email: "ana@email.com", role: "customer", status: "active", joined: "2025-04-22", orders: 5, spent: 1849.95 },
  { id: "USR-004", name: "Juan García", email: "juan@email.com", role: "customer", status: "active", joined: "2025-06-10", orders: 3, spent: 899.97 },
  { id: "USR-005", name: "María Torres", email: "maria@email.com", role: "customer", status: "active", joined: "2025-07-01", orders: 2, spent: 459.98 },
  { id: "USR-006", name: "Luis Rodríguez", email: "luis@email.com", role: "customer", status: "inactive", joined: "2025-08-14", orders: 1, spent: 1449.99 },
  { id: "USR-007", name: "Sofía Pérez", email: "sofia@email.com", role: "customer", status: "active", joined: "2025-09-03", orders: 4, spent: 679.96 },
  { id: "USR-008", name: "Diego Sánchez", email: "diego@email.com", role: "customer", status: "banned", joined: "2025-10-20", orders: 1, spent: 0 },
  { id: "USR-009", name: "Valentina Cruz", email: "val@email.com", role: "customer", status: "active", joined: "2025-11-05", orders: 6, spent: 2349.94 },
  { id: "USR-010", name: "Andrés Flores", email: "andres@email.com", role: "customer", status: "active", joined: "2026-01-18", orders: 2, spent: 739.97 },
];

export const dashboardStats: DashboardStats = {
  revenue: { value: 48392.50, change: 12.4 },
  orders: { value: 42, change: 8.2 },
  users: { value: 387, change: 5.1 },
  products: { value: 15, change: 0 },
};

export const topProducts: TopProduct[] = [
  { id: "1", name: "Dell XPS 15 9530", category: "Laptops", sold: 14, revenue: 26599.86 },
  { id: "9", name: "MSI MEG Trident X2", category: "Desktop", sold: 6, revenue: 17999.94 },
  { id: "7", name: "HP Spectre x360 14", category: "Laptops", sold: 9, revenue: 13049.91 },
  { id: "2", name: "ASUS ROG Swift 27\" 4K", category: "Monitores", sold: 11, revenue: 7149.89 },
  { id: "11", name: "Samsung 990 Pro 2TB SSD", category: "Almacenamiento", sold: 22, revenue: 3959.78 },
];
