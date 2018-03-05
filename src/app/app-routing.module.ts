import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanierComponent} from './panier/panier.component';
import {HomeComponent} from './home/home.component';


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
