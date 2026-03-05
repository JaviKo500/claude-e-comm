export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  stock: number;
  isNew: boolean;
  images: string[];
  specs: Record<string, string>;
  rating: number;
  reviews: number;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
}

export interface Brand {
  id: string;
  name: string;
  count: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded";
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";
export type UserRole = "admin" | "customer";
export type UserStatus = "active" | "inactive" | "banned";

export interface AdminOrder {
  id: string;
  customer: string;
  email: string;
  date: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  total: number;
  items: number;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joined: string;
  orders: number;
  spent: number;
}

export interface DashboardStats {
  revenue: { value: number; change: number };
  orders: { value: number; change: number };
  users: { value: number; change: number };
  products: { value: number; change: number };
}

export interface TopProduct {
  id: string;
  name: string;
  category: string;
  sold: number;
  revenue: number;
}
