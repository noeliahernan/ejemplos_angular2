import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo-service/todo.service';

@Component({
    selector: 'my-app',
    template: `
        <div *ngIf="msg" class="msg">{{msg}}</div>
        <ul>
            <li *ngFor="let todo of todos">
                Id: {{ todo.id }}, Todo: {{ todo.text }}
            </li>
        </ul>
    `
})
export class HomeComponent implements OnInit
{
    todos: Todo[];
    msg: string;

    constructor(private todoService: TodoService){

    }

    ngOnInit()
    {
        this.displayTodos('Cargando todos...');
    }

    displayTodos(msg: string)
    {
        this.msg = msg;

        this.todoService.getTodos().then(todos => {
            this.msg = '';
            this.todos = todos;
        })
    }
}