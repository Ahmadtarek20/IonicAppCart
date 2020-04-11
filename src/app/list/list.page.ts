import { Component, OnInit } from '@angular/core';
import { Carts } from '../Models/Carts';
import { Product } from '../Models/Product';
import { CartServiceService } from '../servecies/cart-service.service';
import { AuthService } from '../servecies/auth.service';
import { ProductsService } from '../servecies/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  cart : Carts [] ;
  listcart : Number[] ;
  valus : any [];


  filteredProducts: Product[];
  _listFilter: string = 'Cart';
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter): this.valus;
  }


  constructor(private cs : CartServiceService ,
    private as: AuthService ,  private router: Router ,
      private prod: ProductsService )
  {
    this.listcart = [];
    this.valus = [];
    this.filteredProducts =this.valus;
    this.listFilter = ''


  }
  ngOnInit() {
    this.loadCarts();

  }
  loadCarts(){ 
    const id = localStorage.getItem("id");
    //debugger;
    this.cs.Getcarts(id).subscribe((cart : Carts[]) =>{  
      this.cart = cart;
      //console.log(cart);
      for (let i = 0; i < this.cart.length; i++) {
       // console.log(this.cart[i].productId);
        this.listcart.push(this.cart[i].productId);
       console.log(this.listcart);
      }
      this.cs.GetProductsdetals(this.listcart).subscribe(result =>{
       // console.log(result)             // list of back
        console.log(this.listcart)       // list of ids
       for (let i = 0; i < this.cart.length  ; i++) {
        let back= result.find(x => x.id == cart[i].productId)
       // console.log(back)
         this.valus.push(back)

      }})
     },error =>{
     console.log('eror')
    });

}
cancel(productId ){
  const id = localStorage.getItem("id");
  let deletproduct = {productId: productId , userid: (id) };
  console.log(deletproduct);

  this.cs.dropdata(productId).subscribe(result => {
    console.log('Done to Deleted')
    for (let i = 1; i < this.valus.length  ; i++) {

     this.valus.splice(this.valus[productId],1)
     console.log(this.valus)

    }
  }),error =>{
    console.log(error)
  }
}
performFilter(filterBy : string): Product[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.valus.filter((product:Product)=>
  product.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

pymant(){

}

}