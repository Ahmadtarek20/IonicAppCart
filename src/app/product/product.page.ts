import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servecies/auth.service';
import { ProductsService } from '../servecies/products.service';
import { Carts } from '../Models/Carts';
import { Product } from '../Models/Product';
import { Router } from '@angular/router';
import { CartServiceService } from '../servecies/cart-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  Product : Product[];
  add:number = -1;
  cart : Carts;

  constructor(private productserv: ProductsService,  private cs : CartServiceService ,
     private as: AuthService , private router : Router) { }

  ngOnInit() {
    this.loadProdects();
  }
  loadProdects(){
    this.productserv.getProducts().subscribe((Product : Product[])=>{
       this.Product = Product;
    },error =>{
      console.log("error")
    });
  }
  addtoCare(index: number){
    if(this.as.loggedIn)this.add = +index;
    else this.router.navigate([' ']); 
   }
  buy(amount: number){
    const id = localStorage.getItem("id");
    // debugger;
    let selected = this.Product[this.add]
    let data = {
      ProductId: selected.id,
      UserId: (id),
      Amount: +amount,
    };
    console.log(data);
    this.cs.addtocart(data).subscribe(da =>{
      this.cart = data
      console.log("Done to Add")
    },error =>{
      console.log(error)
    });
  }
}
