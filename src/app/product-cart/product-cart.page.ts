import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Models/Product';
import { CartServiceService } from '../servecies/cart-service.service';
import { AuthService } from '../servecies/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.page.html',
  styleUrls: ['./product-cart.page.scss'],
})
export class ProductCartPage implements OnInit {

  @Input() product: Product;

  constructor(private cs : CartServiceService ,
    private as: AuthService
   , private router : Router) { }

  ngOnInit() {
  }

}
