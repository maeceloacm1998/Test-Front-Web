export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface UpdateProductParams {
  id: number;
  data?: Partial<Product>;
} 