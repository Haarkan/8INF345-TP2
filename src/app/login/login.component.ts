import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../auth.service';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(public route: ActivatedRoute, private authService: AuthService) {
    }

    password: string;
    username: string;

    login(): void {
        this.authService.auth(this.username, this.password);
    }

    ngOnInit() {
    }

}
