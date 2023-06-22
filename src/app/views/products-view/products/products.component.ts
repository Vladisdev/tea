import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductType } from '../../../../types/product.type';
import { ProductsService } from '../../../shared/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: ProductType[] = [];
  private subscription: Subscription | null = null;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.productService.getProducts().subscribe({
      next: data => {
        this.products = data;
      },
      error: err => {
        console.log(err);
        this.router.navigate(['']);
      },
    });
  }
}
