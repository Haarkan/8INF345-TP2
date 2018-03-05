import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';


@Injectable()
export class AuthGuard {

    constructor( private authService: AuthService, private router: Router ) {
    }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        if(this.authService.isLoggedIn()) return true;
        return false;
        // else navigate to login
    }
}