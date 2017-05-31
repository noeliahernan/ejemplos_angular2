import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.html'
})
export class TodoListComponent
{
    @Input() todos;

    displayTodo(todo: string): void
    {
        console.log(todo);
    }
}