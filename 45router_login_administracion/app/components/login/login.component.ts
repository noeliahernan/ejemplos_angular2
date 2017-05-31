import {Component} from "@angular/core";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent
{
    user: Object = {
        username: '',
        password: ''
    };
    tryLogin: boolean = false;

    constructor(public authService: AuthService, public router: Router)
    {

    }

    onLogin()
    {
        this.tryLogin = true;
        this.authService.login(this.user['username']).subscribe(() => {
            if(this.authService.isLoggedIn)
            {
                this.tryLogin = false;
                if(this.authService.isAdmin)
                    this.router.navigate(['/administration']);
                else    
                    this.router.navigate(['/profile']);
            }
        })
    }
}