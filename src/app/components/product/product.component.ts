import { CartService } from './../../services/cart.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import{ToastrService } from 'node_modules/ngx-toastr'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded=false;
  filterText="";
  //productResponseModel:ProductResponseModel={};
  
  constructor(private productService:ProductService, private activatedRoot:ActivatedRoute,
    private toasterService:ToastrService,private cartService:CartService) {}

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
   addToCart(product:Product){
    this.cartService.addToCart(product)
    this.toasterService.success("Sepete Eklendi",product.productName)
   }
   
}
