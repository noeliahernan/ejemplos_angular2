import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <nav>
            <div class="nav-wrapper">
                <a [routerLink]="['/']" class="brand-logo right">Curso de Angular2</a>
                <ul id="nav-mobile" class="left">
                    <li><a [routerLink]="['/']">Home</a></li>
                    <li><a [routerLink]="['/login']">Login</a></li>
                    <li><a [routerLink]="['/contact']">Contacto</a></li>
                    <li><a [routerLink]="['/profile']">Profile</a></li>
                    <li><a [routerLink]="['/dashboard']">Dashboard</a></li>
                </ul>
             </div>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {

}