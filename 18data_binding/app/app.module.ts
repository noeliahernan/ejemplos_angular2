import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ HomeComponent ],
    bootstrap: [ HomeComponent ]
})

export class AppModule{

}