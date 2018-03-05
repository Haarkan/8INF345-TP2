import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanierComponent} from './panier/panier.component';
import {HomeComponent} from './home/home.component';
import {ProductDetailsComponent} from './home/product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {AdminComponent} from './admin/admin.component';


const appRoutes: Routes = [
    {   path: 'home',
        component: HomeComponent,
        data: { title: 'Panier' }
    },
    {   path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'panier',
        component: PanierComponent,
        data: { title: 'Panier' }
    },
    {
        path: 'details/:id',
        component: ProductDetailsComponent,
        data: { title: 'Details' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }

    },
    {
        path: 'admin',
        component: AdminComponent,
        data: { title: 'Admin' },
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
