import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Product } from '../_models/product.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Order } from '../_models/order.model';
import { ProductRequest } from '../_models/product-request.interface';
import { Customer } from '../_models/customer.interface';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.apiUrl + '/products');
  }

  getProduct(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(
      environment.apiUrl + `/products/${productId}`
    );
  }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(environment.apiUrl + '/orders');
  }

  postOrder(customer: Customer, productRequests: ProductRequest[]) {
    console.log(productRequests);
    this.createCustomer(customer).subscribe(x => {
      this.httpClient
        .post(environment.apiUrl + `/customers/${x.id}/orders`, productRequests)
        .subscribe();
    });
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(
      environment.apiUrl + '/customers',
      customer
    );
  }

  getCustomer(customerId: number): Observable<Customer> {
    return this.httpClient.get<Customer>(
      environment.apiUrl + `/customers/${customerId}`
    );
  }
}
