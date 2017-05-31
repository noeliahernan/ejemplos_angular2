import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'home.html'
})
export class HomeComponent
{
    constructor(private auth: Auth) {}
}