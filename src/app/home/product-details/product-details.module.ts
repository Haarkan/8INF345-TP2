import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailsComponent} from './product-details.component';
import {CartService} from '../../cart.service';
import {ProductService} from '../../product.service';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [ProductDetailsComponent],
    providers: [
        ProductService,
        CartService
    ]
})
export class ProductDetailsModule {
}
