import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <p>(UNIDIRECCIONAL CLASE A TEMPLATE) => 
    UserId: {{ user.id }}, username: {{ user.username }}, age: {{ user.age }}</p>
    <p>(UNIDIRECCIONAL TEMPLATE A CLASE) => 
    <span (click)="displayUser(user)">Click para mostrar usuario</span></p>
    <p>(BIDIRECCIONAL) => <input [(ngModel)]="user.username" /></p>
    `
})
export class HomeComponent
{
    user: Object = {
        id: 1,
        username: 'iparra',
        age: 35
    };

    displayUser(user: Object): void{
        console.log(user);
    }
}