import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {ProductService} from '../product.service';
import {CartService} from '../cart.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [HomeComponent],
    providers: [
        ProductService,
        CartService
    ]
})
export class HomeModule {
}
