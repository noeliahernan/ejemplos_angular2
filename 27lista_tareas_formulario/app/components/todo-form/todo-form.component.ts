import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.html'
})
export class TodoFormComponent
{
    @Output() onSubmit = new EventEmitter<any>();
    todo: string;

    public submit()
    {
        this.onSubmit.emit(this.todo);
        this.todo = "";
    }
}