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
var todo_service_1 = require('../../services/todo-service/todo.service');
var HomeComponent = (function () {
    function HomeComponent(todoService) {
        this.todoService = todoService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.displayTodos('Cargando todos...');
    };
    HomeComponent.prototype.displayTodos = function (msg) {
        var _this = this;
        this.msg = msg;
        this.todoService.getTodos().then(function (todos) {
            _this.msg = '';
            _this.todos = todos;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div *ngIf=\"msg\" class=\"msg\">{{msg}}</div>\n        <ul>\n            <li *ngFor=\"let todo of todos\">\n                Id: {{ todo.id }}, Todo: {{ todo.text }}\n            </li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map