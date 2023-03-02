import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from '../../../types/product.type';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'product-card',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductType;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.productsService.getProduct(+params['id']).subscribe({
          next: data => {
            this.product = data;
          },
          error: error => {
            console.log(error);
            this.router.navigate(['']);
          },
        });
      }
    });
  }
}
