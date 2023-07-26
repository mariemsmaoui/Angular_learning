import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/api/products.service';
import { ProductsRepresentation } from '../services/api/models/product-representation copy';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
constructor(private activatedRoute:ActivatedRoute,
  private service :ProductsService){

}
  param:any;
  queryParam:any;
  ngOnInit(): void {
     /* console.log(this.activatedRoute)
      this.param=this.activatedRoute.snapshot.params['username'];
      this.queryParam =this.activatedRoute.snapshot.
      queryParams['course'];
      this.service.getAllProductsWithLimit().subscribe({
        next: (data) => {
          console.log(data
            );
        },
      })*/
      const product :ProductsRepresentation={
        title:'Myproduct',
        description:'product description',
        price:14,
        category:'Any',
        image:'https://some-image.jpg',
      }
      this.service.createProduct(product).subscribe({
        next: (result) => {
          console.log(result);
          //handle error 
          error :(error:HttpErrorResponse)=>{
           console.log(error);
          
          }
        },
      })
  }
}
