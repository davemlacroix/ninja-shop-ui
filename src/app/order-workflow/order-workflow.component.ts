import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nja-order-workflow',
  templateUrl: './order-workflow.component.html',
  styleUrls: ['./order-workflow.component.scss']
})
export class OrderWorkflowComponent {
  showCheckoutForm = false;
  orderComplete = false;

  checkOutClicked() {
    this.showCheckoutForm = true;
  }

  orderSubmitted() {
    this.showCheckoutForm = false;
    this.orderComplete = true;
  }
}
