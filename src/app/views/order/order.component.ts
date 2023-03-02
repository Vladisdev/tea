import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../shared/validators/custom-validators';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  successOrderReq: boolean = false;
  showError: boolean = false;

  private subscription: Subscription | null = null;

  orderForm = this.fb.group({
    name: new FormControl('', {
      validators: [
        Validators.required,
        CustomValidators.nameAndLastnameValidator,
      ],
    }),
    last_name: new FormControl('', {
      validators: [
        Validators.required,
        CustomValidators.nameAndLastnameValidator,
      ],
    }),
    phone: new FormControl('', {
      validators: [Validators.required, CustomValidators.phoneValidator],
    }),
    country: new FormControl('', {
      validators: [Validators.required, CustomValidators.countryValidator],
    }),
    zip: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    product: new FormControl('', {
      validators: [Validators.required],
    }),
    address: new FormControl('', {
      validators: [Validators.required, CustomValidators.addressValidator],
    }),
    comment: new FormControl(['']),
  });

  get name() {
    return this.orderForm.get('name');
  }

  get lastName() {
    return this.orderForm.get('last_name');
  }

  get phone() {
    return this.orderForm.get('phone');
  }

  get product() {
    return this.orderForm.get('product');
  }

  get address() {
    return this.orderForm.get('address');
  }

  get country() {
    return this.orderForm.get('country');
  }

  get zip() {
    return this.orderForm.get('zip');
  }

  get comment() {
    return this.orderForm.get('comment');
  }

  createOrder(): void {
    this.subscription = this.productsService
      .createOrder({
        name: this.name?.value,
        last_name: this.lastName?.value,
        phone: this.phone?.value,
        country: this.country?.value,
        zip: this.zip?.value,
        product: this.product?.value,
        address: this.address?.value,
        comment: this.comment?.value,
      })
      .subscribe(response => {
        if (response.success && !response.message) {
          this.successOrderReq = true;
        } else {
          this.successOrderReq = false;
          this.showError = true;
        }
      });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['product']) {
        this.product?.patchValue(params['product']);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
