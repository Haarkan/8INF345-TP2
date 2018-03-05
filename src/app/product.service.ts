import {Injectable} from '@angular/core';
import {Product} from './models/product';
import {PRODUCTS} from './mocks/product.mock';

@Injectable()
export class ProductService {


    constructor() {
    }

    public getProducts(): Product[] {
        return PRODUCTS;
    }

    public get10Products(indice: number): Product[] {
        return PRODUCTS.slice(indice - 9, indice);
    }

    public countProducts(): number {
        return PRODUCTS.length;
    }

    public getProductById(toFind: number): Product {
        let product: Product;
        PRODUCTS.forEach(function (prod) {
            if (prod.id === toFind)
                product = prod;
        });
        return product;
    }

    public deleteProduct(product: Product): void {
        PRODUCTS.forEach(finded => {
            if (finded.id === product.id) {
                PRODUCTS.splice(PRODUCTS.indexOf(finded), 1);

            }
        });
    }

    public editProduct(product: Product) {
        // si edit
        if (product.id !== 0) {
            PRODUCTS.forEach(finded => {
                if (finded.id === product.id) {
                    finded = product;
                }
            });
        } else {
            // si ajout
            product.id = this.countProducts() + 1;
            PRODUCTS.push(product);
        }
    }
}
