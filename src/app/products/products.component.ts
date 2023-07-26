import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/api/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductsRepresentation } from '../services/api/models/product-representation copy';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products:ProductsRepresentation[]=[];
  constructor(
    private service :ProductsService){
  
  }
   
    ngOnInit(): void {
      
   
        this.service.getAllProductsWithLimit().subscribe({
          next: (result) => {
            console.log(result);
            this.products=result;
            //handle error 
            error :(error:HttpErrorResponse)=>{
             console.log(error);
            
            }
          },
        })
    }
}
