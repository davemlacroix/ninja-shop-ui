import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../_models/product.model';
import { AppDispatcher } from '../app.dispatcher';

@Component({
  selector: 'nja-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;

  count = 0;
  constructor(private appDispatcher: AppDispatcher) {}

  ngOnInit() {}

  addItem() {
    this.count += 1;
    this.appDispatcher.incrementProduct(this.product);
    console.log(this.appDispatcher.getSelectedProducts);
  }

  removeItem() {
    if (this.count === 0) {
      return;
    }
    this.count -= 1;
    this.appDispatcher.decrementProduct(this.product);
    console.log(this.appDispatcher.getSelectedProducts);
  }
}
