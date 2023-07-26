import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductsRepresentation } from './models/product-representation copy';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private baseUrl:string ='https://fakestoreapi.com/'

  constructor(private http:HttpClient) { }
  getAllProductsWithLimit(limit:number=5):Observable<ProductsRepresentation []>{
   // const producsUrl :string =this.baseUrl + 'products?limit=' + 5;
    const producsUrl :string =`${this.baseUrl}` + 'products?limit=' + `${limit}`
 return this.http.get<ProductsRepresentation[]>(producsUrl);
  }
  createProduct(product: ProductsRepresentation): Observable<ProductsRepresentation> {
    const productsUrl: string = `${this.baseUrl}products`;
    return this.http.post<ProductsRepresentation>(productsUrl, product);
  }
}
