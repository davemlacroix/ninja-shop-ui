import { ProductRequest } from './product-request.interface';

export class Order {
  id: number;
  customerId;
  total;
  productRequests: ProductRequest[];
}
