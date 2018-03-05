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
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PanierComponent,
        ProductDetailsComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        ProductService,
        CartService,
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {

    }
}
