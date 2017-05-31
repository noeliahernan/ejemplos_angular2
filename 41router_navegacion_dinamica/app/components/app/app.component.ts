import {Component} from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'my-app',
    template: `
        <nav>
            <div class="nav-wrapper">
                <a [routerLink]="['/']" class="brand-logo right">Curso de Angular2</a>
                <ul id="nav-mobile" class="left">
                    <li><a [routerLink]="['/']">Home</a></li>
                    <li><a [routerLink]="['/contact']">Contacto</a></li>
                    <li><a [routerLink]="['/profile']">Profile</a></li>
                    <li><a [routerLink]="['/dashboard']">Dashboard</a></li>

                    <li [ngSwitch]="authService.isLoggedIn">
                        <a *ngSwitchCase="false" [routerLink]="['/login']">Login</a>
                        <a *ngSwitchCase="true">Logout</a>
                    </li>
                </ul>
             </div>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent 
{
    constructor(public authService: AuthService) { }
}