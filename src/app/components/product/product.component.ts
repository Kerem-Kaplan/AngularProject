import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
 
  dataLoaded=false;
  //productResponseModel:ProductResponseModel={};
  
  constructor(private productService:ProductService, private activatedRoot:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoot.params.subscribe(params=>{
      if(params["categoryID"]){
        this.getProductsByCategory(params["categoryID"])
      }else{
        this.getProducts()
      }
    })
  }

  getProducts(){
   this.productService.getProducts().subscribe(response=>{
    this.products=response.data
    this.dataLoaded=true
   })
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
     this.products=response.data
     this.dataLoaded=true
    })
   }
}
