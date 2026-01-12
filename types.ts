
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  spec: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export type Currency = 'USD' | 'PEN' | 'EUR';
export type Language = 'EN' | 'ES';
