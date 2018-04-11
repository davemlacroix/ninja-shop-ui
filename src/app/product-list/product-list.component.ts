import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/product.model';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { AppDispatcher } from '../app.dispatcher';

@Component({
  selector: 'nja-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productsService: ProductService, private appDispatcher: AppDispatcher) { }

  products: Product[];
  ngOnInit() {
    this.productsService.getProducts().subscribe(
      x => this.products = x
    );
  }
}
