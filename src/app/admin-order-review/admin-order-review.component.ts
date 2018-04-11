import { Component, OnInit } from '@angular/core';
import { Order } from '../_models/order.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'nja-admin-order-review',
  templateUrl: './admin-order-review.component.html',
  styleUrls: ['./admin-order-review.component.scss']
})
export class AdminOrderReviewComponent implements OnInit {
  orders: Order[] = [];
  constructor(private productsService: ProductService) {}

  ngOnInit() {
    this.productsService.getOrders().subscribe(x => (this.orders = x));
  }
}
