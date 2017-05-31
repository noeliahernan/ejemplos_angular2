import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ HomeComponent, TodoFormComponent, TodoListComponent ],
    bootstrap: [ HomeComponent ]
})

export class AppModule{

}