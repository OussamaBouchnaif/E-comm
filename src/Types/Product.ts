export interface Product {
  _id: string;
  title: string;
  brand: string;
  category: string;
  description: string;
  image: string;
  oldPrice: number;
  price: number;
  isNew?: boolean;
  }