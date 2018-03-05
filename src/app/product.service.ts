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

    public getProductById (toFind: number): Product {
        let product: Product;
        PRODUCTS.forEach(function (prod) {
            if (prod.id === toFind)
                product = prod;
        });
        return product;
    }

}
