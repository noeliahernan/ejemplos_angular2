import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITodo } from '../../reducers/todo.reducer';
import { TodoActions } from '../../actions/todo.actions';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/rx';

@Component({
    selector: 'todo-list',
    template: `
    <input type="text" [(ngModel)]="todo">
    <button 
        class="btn waves-effect black waves-light input-block-level" 
        (click)="addTodo()">
        Add todo
    </button>
    
    <br />

    <ul class="collection">
      <li  
        style="padding: 10px"
        class="collection-item"
        *ngFor="let todo of todosModel$ | async" 
        [style.textDecoration]="todo.completed ? 'line-through' : 'none'"
      >
        <span (click)="toggleTodo(todo.id)">Id: {{ todo.id }}, Todo: {{ todo.text }}</span>
        <span (click)="removeTodo(todo.id)" style="color: red; cursor: pointer" class="right">Remove</span>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent
{
    todo: string;  
    todosModel$: Observable<any>;
    @select<Observable<ITodo[]>>('todos') todos$;
    @select('visibilityFilter') visibilityFilter$;

    constructor(private actions: TodoActions)
    {
        this.todosModel$ = Observable.combineLatest(
            this.todos$,
            this.visibilityFilter$,
            (todos: Array<ITodo>, visibilityFilter: any) => {
                return todos.filter(visibilityFilter);
            }
        )
    }

    addTodo(): void
    {
        this.actions.addTodo(this.todo);
        this.todo = "";
    }

    toggleTodo(id: number | string): void 
    {
        this.actions.toggleTodo(id);
    }

    removeTodo(id: number | string): void 
    {
        this.actions.removeTodo(id);
    }
}