import { Component, Input } from '@angular/core';
import { ProductsRepresentation } from '../services/api/models/product-representation copy';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
@Input()
product:ProductsRepresentation={};

}
