import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../servecies/products.service';
import { Product } from '../Models/Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.page.html',
  styleUrls: ['./product-detalis.page.scss'],
})
export class ProductDetalisPage implements OnInit {

  product: Product;

  constructor(private productserv: ProductsService,
     private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.loadProduct();
  }
  loadProduct()
  {
    this.productserv.getProduct(+this.route.snapshot.params['id']).subscribe((product:Product)=>{
      this.product=product;
    },error => {
      console.log(error);
    });
  }
  Back(){
    this.router.navigate(['/product']);
  }

}

