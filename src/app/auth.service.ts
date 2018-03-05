import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

    private logged: boolean;

    constructor() {
        this.logged = false;
    }

    public isLoggedIn(): boolean {
        return this.logged;
    }

    public auth(username: string, password: string) {
        if (username === 'admin' && password === 'admin') {
            this.logged = true;
        }
    }
}
