export interface Product {
  id: number;
  title: string;
  bengaliTitle?: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  badge?: 'Sale' | 'Hot';
  category: string;
  description?: string;
  availability?: 'In Stock' | 'Out of Stock';
  sku?: string;
  weight?: string;
  ingredients?: string[];
  benefits?: { title: string; content: string }[];
  nutritionalInfo?: Record<string, string>;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ToastState {
  show: boolean;
  message: string;
}