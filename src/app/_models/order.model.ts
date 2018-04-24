import { ProductRequest } from './product-request.interface';

export class Order {
  id: number;
  customerId: number;
  total: number;
  productRequests: ProductRequest[];
}
