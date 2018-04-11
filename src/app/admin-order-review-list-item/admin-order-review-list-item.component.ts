import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../_models/order.model';
import { Customer } from '../_models/customer.interface';
import { SelectedProduct } from '../_models/selected-product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'nja-admin-order-review-list-item',
  templateUrl: './admin-order-review-list-item.component.html',
  styleUrls: ['./admin-order-review-list-item.component.scss']
})
export class AdminOrderReviewListItemComponent implements OnInit {
  @Input() order: Order;
  customer: Customer;
  selectedProducts: SelectedProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.order.productRequests.forEach(x => {
      this.productService.getProduct(x.productId).subscribe(product =>
        this.selectedProducts.push({
          count: x.requestCount,
          product
        })
      );
    });
    console.log(this.order.customerId);
    this.productService
      .getCustomer(this.order.customerId)
      .subscribe(x => (this.customer = x));
  }
}
