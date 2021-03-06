import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../models/product';
import {ProductService} from '../product.service';
import {CartService} from '../cart.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-panier',
    templateUrl: './panier.component.html',
    styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
    nbProducts: number;
    curentPage: number;
    curentProducts: Product[];
    isPaid: boolean;
    errorPayement: boolean;
    constructor(public route: ActivatedRoute, private productService: ProductService,
                private cartService: CartService, private toastService: ToastrService) {
    }


    ngOnInit() {
        this.nbProducts = this.cartService.countProducts();
        this.curentPage = 1;
        this.isPaid = false;
        this.errorPayement = false;
        this.get10Products(9);
    }

    get10Products(indice: number): void {
        this.curentProducts = this.cartService.get10Products(indice);
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

    payCart(): void {
        if(this.cartService.countProducts() > 0) {
            if (this.cartService.payCart()) {
                this.isPaid = true;
                this.errorPayement = false;
                this.curentProducts = new Array<Product>();
                this.toastService.success('Votre commande n°' + this.makeid() +
                    'a été passée et vous sera livrée très prochainement !', 'Succès !');
            }
            else {
                this.errorPayement = true;
            }
        } else {
            this.toastService.error('Panier vide :(', 'Erreur !');
        }


    }

    setCurentPage(page: number) {
        this.curentPage = page;
        this.get10Products(this.curentPage);
    }

    getTotal(): number{
        return this.cartService.totalPrice();
    }

    private makeid(): string {
        let text: string = "";
        const possibleInt: string = "0123456789";
        const possibleChar: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 5; i++)
            text += possibleInt.charAt(Math.floor(Math.random() * possibleInt.length));

        for (var i = 0; i < 9; i++)
            text += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length));
        return text;
    }

}
