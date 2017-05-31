import { Injectable } from '@angular/core';

export class Todo {
    constructor(public id: number, public text: string){}
}

const TODOS: Todo[] = [
    new Todo(1, 'Todo1'),
    new Todo(2, 'Todo2'),
    new Todo(3, 'Todo3'),
];

const FETCH_LATENCY = 500;

@Injectable()
export class TodoService
{
    getTodos()
    {
        return new Promise<Todo[]>(resolve => {
            setTimeout(() => {
                resolve(TODOS)
            }, 
            FETCH_LATENCY)
        })
    }
}