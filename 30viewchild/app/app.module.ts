import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HomeComponent, CounterComponent ],
    bootstrap: [ HomeComponent ]
})

export class AppModule{

}