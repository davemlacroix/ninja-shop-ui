import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from './_models/product.model';
import { SelectedProduct } from './_models/selected-product.model';

@Injectable()
export class AppDispatcher {
  private selectedProducts: SelectedProduct[];
  private selectionChanged = new Subject();

  selectionChanged$ = this.selectionChanged.asObservable();

  get getSelectedProducts() {
    if (!this.selectedProducts) {
      this.selectedProducts = [];
    }
    return this.selectedProducts;
  }

  incrementProduct(product: Product) {
    let itemFound = false;
    this.getSelectedProducts.forEach(x => {
      if (x.product.id === product.id) {
        x.count += 1;
        itemFound = true;
        return;
      }
    });
    if (!itemFound) {
      this.getSelectedProducts.push({ product, count: 1 });
    }
    this.selectionChanged.next();
  }

  decrementProduct(product: Product) {
    this.getSelectedProducts.forEach(x => {
      if (x.product.id === product.id) {
        x.count -= 1;
        if (x.count === 0) {
          this.selectedProducts = this.selectedProducts.filter(y => y !== x);
        }
        return;
      }
    });
    this.selectionChanged.next();
  }
}
