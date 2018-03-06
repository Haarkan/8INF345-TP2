import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {CartService} from '../cart.service';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    nbProducts: number;
    curentPage: number;
    curentProducts: Product[];

    constructor(public route: ActivatedRoute, private productService: ProductService,
                private cartService: CartService, private toastService: ToastrService) {
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
    }

    deleteProduct(product: Product): void {
        this.productService.deleteProduct(product);
        this.get10Products(9);
        this.nbProducts = this.productService.countProducts();
        this.paginationButtons();
        this.toastService.success('Le produit à été supprimé  !', 'Succès !');

    }

    setCurentPage(page: number) {
        this.curentPage = page;
        this.get10Products(this.curentPage);
    }

}
