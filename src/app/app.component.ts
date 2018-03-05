import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';


// -------   module introuvable, pourra servir pour le logout : 
//import {AuthenticationService} from "./auth/auth.service";
//import {AuthGuard} from "./auth/auth-guard";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private router: Router, private authService: AuthService) {

    }

    // - Comme dans L'exemple 17 du cours :
    getName() {
        return 'Angular';
    }

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

    reroute(newRoute: string) {
        if (newRoute == 'home') this.router.navigateByUrl('/', {skipLocationChange: false});
        if (newRoute == 'panier') this.router.navigateByUrl('/panier', {skipLocationChange: false});
    }

    //module introuvable
    /*isConnected(){
      return this.authGuard.isConnected();
    }

    logout(){
        this.authService.logout();
        window.location.reload();
    }*/

}
