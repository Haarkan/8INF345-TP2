import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {ProductService} from './product.service';
import {PanierComponent} from './panier/panier.component';
import {CartService} from './cart.service';
import {ProductDetailsComponent} from './home/product-details/product-details.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PanierComponent,
        ProductDetailsComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        AppRoutingModule
    ],
    providers: [
        ProductService,
        CartService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {

    }
}
