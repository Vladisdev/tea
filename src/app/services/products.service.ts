import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from '../types/product.type';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.requestApi + 'tea', {});
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(environment.requestApi + `tea?id=${id}`);
  }

  createOrder(data: {
    zip: string | null | undefined;
    country: string | null | undefined;
    product: string | null | undefined;
    address: string | null | undefined;
    phone: string | null | undefined;
    name: string | null | undefined;
    last_name: string | null | undefined;
    comment: string[] | null | undefined;
  }) {
    return this.http.post<{ success: boolean; message: string }>(
      `https://testologia.site/order-tea`,
      data
    );
  }
}
