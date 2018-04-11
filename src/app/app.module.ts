import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { CheckOutFormComponent } from './check-out-form/check-out-form.component';
import { ProductService } from './_services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductSelectionReviewComponent } from './product-selection-review/product-selection-review.component';
import { AppDispatcher } from './app.dispatcher';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { AdminOrderReviewComponent } from './admin-order-review/admin-order-review.component';
import { AdminOrderReviewListItemComponent } from './admin-order-review-list-item/admin-order-review-list-item.component';
import { OrderWorkflowComponent } from './order-workflow/order-workflow.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminOrderReviewComponent },
  { path: '', component: OrderWorkflowComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListItemComponent,
    CheckOutFormComponent,
    ProductSelectionReviewComponent,
    OrderCompleteComponent,
    AdminOrderReviewComponent,
    AdminOrderReviewListItemComponent,
    OrderWorkflowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [ProductService, AppDispatcher],
  bootstrap: [AppComponent]
})
export class AppModule {}
