import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { EventsDirective } from './directives/events.directive';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HomeComponent, EventsDirective ],
    bootstrap: [ HomeComponent ]
})

export class AppModule{

}