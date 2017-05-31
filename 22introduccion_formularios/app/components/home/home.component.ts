import { Component } from '@angular/core';
import { Post } from '../../classes/post';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'home.html',
    styles: [`
    .col.s6 > .btn {
       width: 100%;
    }
    `]
})
export class HomeComponent
{
    model: Post = new Post(
        1, 
        "Formularios con Angular 2",
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    );

    get post() {
        return JSON.stringify(this.model);
    }
}