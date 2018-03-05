import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/product';
import {ProductService} from '../../product.service';
import {CartService} from '../../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    id: number;

  product: Product;
  constructor(public route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
     this.route.params.subscribe(params => {
          this.id = +params['id']; // (+) converts string 'id' to a number

          // In a real app: dispatch action to load the details here.
      });
     this.product = this.productService.getProductById(this.id);
  }
    addToCart(): void {
        this.cartService.addToCart(this.product);
  }
  ngOnInit() {
  }

}
