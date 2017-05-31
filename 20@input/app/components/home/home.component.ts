import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <panel [user]="user"></panel>
    </div>
    `
})
export class HomeComponent
{
    user: Object = { id: 1, username: 'iparra', age: 35};
}