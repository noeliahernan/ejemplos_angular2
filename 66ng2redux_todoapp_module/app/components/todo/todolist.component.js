"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_actions_1 = require('../../actions/todo.actions');
var ng2_redux_1 = require('ng2-redux');
var rx_1 = require('rxjs/rx');
var TodoListComponent = (function () {
    function TodoListComponent(actions) {
        this.actions = actions;
        this.todosModel$ = rx_1.Observable.combineLatest(this.todos$, this.visibilityFilter$, function (todos, visibilityFilter) {
            return todos.filter(visibilityFilter);
        });
    }
    TodoListComponent.prototype.addTodo = function () {
        this.actions.addTodo(this.todo);
        this.todo = "";
    };
    TodoListComponent.prototype.toggleTodo = function (id) {
        this.actions.toggleTodo(id);
    };
    TodoListComponent.prototype.removeTodo = function (id) {
        this.actions.removeTodo(id);
    };
    __decorate([
        ng2_redux_1.select('todos'), 
        __metadata('design:type', Object)
    ], TodoListComponent.prototype, "todos$", void 0);
    __decorate([
        ng2_redux_1.select('visibilityFilter'), 
        __metadata('design:type', Object)
    ], TodoListComponent.prototype, "visibilityFilter$", void 0);
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            template: "\n    <input type=\"text\" [(ngModel)]=\"todo\">\n    <button class=\"btn waves-effect black waves-light input-block-level\" (click)=\"addTodo()\">Add todo</button>\n    <br />\n\n    <ul class=\"collection\">\n      <li  \n        style=\"padding: 10px\"\n        class=\"collection-item\"\n        *ngFor=\"let todo of todosModel$ | async\" \n        [style.textDecoration]=\"todo.completed ? 'line-through' : 'none'\"\n      >\n        <span (click)=\"toggleTodo(todo.id)\">Id: {{ todo.id }}, Todo: {{ todo.text }}</span>\n        <span (click)=\"removeTodo(todo.id)\" style=\"color: red; cursor: pointer\" class=\"right\">Remove</span>\n      </li>\n    </ul>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [todo_actions_1.TodoActions])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todolist.component.js.map