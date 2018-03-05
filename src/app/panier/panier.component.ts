import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../models/product';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-root',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  nbProducts: number;
  curentPage: number;
  curentProducts: Product[];
  constructor(public route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.nbProducts = this.productService.countProducts();
    this.curentPage = 1;
    this.get10Products(9);
  }

  get10Products(indice: number): void {
      this.curentProducts =  this.productService.get10Products(indice);
  }

  paginationButtons (): number[] {
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

  setCurentPage (page: number) {
    this.curentPage = page;
    this.get10Products(this.curentPage);
  }

}