import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../auth.service';
import {FormsModule} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(public route: ActivatedRoute, private authService: AuthService, private toastService: ToastrService) {
    }

    password: string;
    username: string;

    login(): boolean {
        return this.authService.auth(this.username, this.password)

    }

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }
    ngOnInit() {
    }

}
