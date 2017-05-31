import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'home.html'
})
export class HomeComponent
{
    todos: Array<string> = [];

    save(todo: string): void 
    {
        this.todos.push(todo);
    }
}