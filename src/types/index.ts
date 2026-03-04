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
