import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { TodoService } from './services/todo-service/todo.service';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HomeComponent ],
    bootstrap: [ HomeComponent ],
    providers: [ TodoService ]
})

export class AppModule{

}