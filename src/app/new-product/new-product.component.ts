import { Component } from '@angular/core';
import { ProductsRepresentation } from '../services/api/models/product-representation copy';
import { ProductsService } from '../services/api/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  product:ProductsRepresentation={};
  constructor(private service:ProductsService,private router:Router){
  }
  saveProduct(){
    this.service.createProduct(this.product).subscribe({
      next:(result)=>{

        this.router.navigate(['produts']);
      }
    })
  }
  
  }


