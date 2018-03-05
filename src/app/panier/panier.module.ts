import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanierComponent} from './panier.component';
import {ProductService} from '../product.service';
import {CartService} from '../cart.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [PanierComponent],
    providers: [
        ProductService,
        CartService
    ]
})
export class HomeModule {
}
