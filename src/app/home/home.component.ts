import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {Product} from '../models/product';
import {ProductService} from '../product.service';
import {CartService} from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    nbProducts: number;
    curentPage: number;
    curentProducts: Product[];

    constructor(private productService: ProductService, private cartService: CartService, private toastService: ToastrService) {
    }

    ngOnInit() {
        this.nbProducts = this.productService.countProducts();
        this.curentPage = 1;
        this.get10Products(9);


    }

    get10Products(indice: number): void {
        this.curentProducts = this.productService.get10Products(indice);
    }

    paginationButtons(): number[] {
        let nbBt = 1;
        const buttons: Array<number> = new Array<number>();
        for (let i = 0; i < this.nbProducts; ++i) {

            if (i % 9 === 0) {
                buttons.push(nbBt);
                ++nbBt;
            }

        }
        return buttons;
    }

    addToCart(product: Product): void {
        this.cartService.addToCart(product);

        this.toastService.success('Le produit à été ajouté au panier !', 'Succès !');

    }

    setCurentPage(page: number) {
        this.curentPage = page;
        this.get10Products(this.curentPage);
    }

}
