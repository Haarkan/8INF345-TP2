import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {ProductService} from '../product.service';
import {CartService} from '../cart.service';
import {RouterModule} from '@angular/router';
import {ProductDetailsComponent} from './product-details/product-details.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        HomeComponent,
        ProductDetailsComponent],
    providers: [
        ProductService,
        CartService
    ]
})
export class HomeModule {
}
