import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {CartService} from '../cart.service';
import {ProductService} from '../product.service';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        AdminComponent],
    providers: [
        ProductService,
        CartService
    ]
})
export class AdminModule {
}
