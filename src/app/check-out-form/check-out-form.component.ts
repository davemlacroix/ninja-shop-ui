import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectedProduct } from '../_models/selected-product.model';
import { ProductService } from '../_services/product.service';
import { AppDispatcher } from '../app.dispatcher';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ProductRequest } from '../_models/product-request.interface';
import { Customer } from '../_models/customer.interface';

@Component({
  selector: 'nja-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.scss']
})
export class CheckOutFormComponent implements OnInit {
  @Output() orderSubmitted = new EventEmitter();
  selectedProducts: SelectedProduct[];
  total = 0;
  ninjaForm: FormGroup;
  wasValidated = false;

  constructor(
    private productService: ProductService,
    private appDispatcher: AppDispatcher,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
    this.selectedProducts = this.appDispatcher.getSelectedProducts;
    this.selectedProducts.forEach(x => {
      this.total += x.product.price * x.count;
    });
  }

  createForm() {
    this.ninjaForm = this.fb.group({
      firstName: [''],
      lastName: ['', Validators.required],
      email: [''],
      address: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      ccname: ['', Validators.required],
      ccnumber: ['', Validators.required],
      ccexpiration: ['', Validators.required],
      cccvv: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.ninjaForm.valid) {
      this.wasValidated = true;
      return;
    }
    const customer: Customer = {
      id: 0,
      firstName: this.ninjaForm.get('firstName').value,
      lastName: this.ninjaForm.get('lastName').value,
      email: this.ninjaForm.get('email').value,
      address: this.ninjaForm.get('address').value,
      state: this.ninjaForm.get('state').value,
      zip: this.ninjaForm.get('zip').value,
      ccname: this.ninjaForm.get('ccname').value,
      ccnumber: this.ninjaForm.get('ccnumber').value,
      ccexp: this.ninjaForm.get('ccexpiration').value,
      cccvv: this.ninjaForm.get('cccvv').value
    };

    const productRequests: ProductRequest[] = [];
    this.selectedProducts.forEach(x =>
      productRequests.push({
        productId: x.product.id,
        currentPrice: x.product.price,
        requestCount: x.count
      })
    );

    this.productService.postOrder(customer, productRequests);
    console.log('emitting order submitted');
    this.orderSubmitted.emit();
  }
}
