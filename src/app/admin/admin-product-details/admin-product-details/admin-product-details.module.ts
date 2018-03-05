import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductDetailsComponent } from './admin-product-details.component';
import {CartService} from '../../../cart.service';
import {ProductService} from '../../../product.service';
import {RouterModule} from '@angular/router';
import {ProductDetailsComponent} from '../../../home/product-details/product-details.component';

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
export class AdminProductDetailsModule { }
