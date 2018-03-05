import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../../cart.service';
import {ProductService} from '../../../product.service';

@Component({
    selector: 'app-admin-product-details',
    templateUrl: './admin-product-details.component.html',
    styleUrls: ['./admin-product-details.component.css']
})
export class AdminProductDetailsComponent implements OnInit {
    id: number;
    product: Product;

    constructor(public route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
        this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
        });
        if (this.id !== 0) {
            this.product = this.productService.getProductById(this.id);
        } else {
            this.product = new Product(0, '', '', 0);
        }

    }

    editProduct(): void {
        this.productService.editProduct(this.product);
    }

    ngOnInit() {
    }

}
