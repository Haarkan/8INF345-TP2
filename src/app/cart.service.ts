import {Injectable} from '@angular/core';
import {Product} from './models/product';

@Injectable()
export class CartService {
    cart: Array<Product>;

    constructor() {
        this.cart = new Array<Product>();
    }


    public addToCart(product: Product): void {
        this.cart.push(product);
    }

    public get10Products(indice: number): Product[] {
        return this.cart.slice(indice - 9, indice);
    }

    public countProducts(): number {
        return this.cart.length;
    }
}
