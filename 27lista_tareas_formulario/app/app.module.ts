import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ HomeComponent, TodoFormComponent ],
    bootstrap: [ HomeComponent ]
})

export class AppModule{

}