export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number;
  adjustedPrice?: number;
}

export interface CartItem extends Product {
  quantity: number;
}