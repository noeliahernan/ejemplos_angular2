import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <panel [user]="user" (onSelect)="selectUser($event)"></panel>
    </div>
    `
})
export class HomeComponent
{
    user: Object = { id: 1, username: 'iparra', age: 35};

    selectUser(selected)
    {
        console.log("Evento lanzado, selected es: " + selected);
    }
}