import {Component, OnInit, OnDestroy, EventEmitter, Output} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AppDispatcher } from '../app.dispatcher';
import { SelectedProduct } from '../_models/selected-product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'nja-product-selection-review',
  templateUrl: './product-selection-review.component.html',
  styleUrls: ['./product-selection-review.component.scss']
})
export class ProductSelectionReviewComponent implements OnInit, OnDestroy {
  constructor(
    private appDispatcher: AppDispatcher,
    private productService: ProductService
  ) {}

  @Output() checkout = new EventEmitter();

  selectedProducts: SelectedProduct[];
  reviewSubscription: Subscription;
  subTotal = 0;
  totalItems = 0;

  ngOnInit() {
    this.reviewSubscription = this.appDispatcher.selectionChanged$.subscribe(
      x => this.refresh()
    );
  }

  ngOnDestroy(): void {
    if (this.reviewSubscription) {
      this.reviewSubscription.unsubscribe();
    }
  }

  refresh() {
    this.selectedProducts = this.appDispatcher.getSelectedProducts;
    this.subTotal = 0;
    this.totalItems = 0;
    this.selectedProducts.forEach(x => {
      this.subTotal += x.product.price * x.count;
      this.totalItems += x.count;
    });
  }
}
