import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h2>Pipes puros e impuros en Angular 2</h2>
        <input type="text" [(ngModel)]="username" />
        {{ username | pure_impure }}
    `
})
export class HomeComponent
{
    username: string = "iparra";
}