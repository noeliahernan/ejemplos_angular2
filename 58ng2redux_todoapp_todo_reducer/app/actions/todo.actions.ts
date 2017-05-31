import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';

@Injectable()
export class TodoActions
{
    static ADD_TODO: string = "ADD_TODO";
    static TOGGLE_TODO: string = "TOGGLE_TODO";
    static REMOVE_TODO: string = "REMOVE_TODO";

    constructor(private ngRedux: NgRedux<IAppState>)
    {

    }

    addTodo(text: string | number): void
    {
        this.ngRedux.dispatch({
            type: TodoActions.ADD_TODO,
            payload: text
        })
    }

    removeTodo(id: string | number): void 
    {
        this.ngRedux.dispatch({
            type: TodoActions.REMOVE_TODO,
            payload: id
        })
    }

    toggleTodo(id: string | number): void
    {
        this.ngRedux.dispatch({
            type: TodoActions.TOGGLE_TODO,
            payload: id
        })
    }
}