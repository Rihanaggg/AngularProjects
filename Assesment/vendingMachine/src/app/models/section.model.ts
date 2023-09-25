import { Product } from './product.model';

export interface Section {
  id: number;
  name: string;
  products: Product[];
}
