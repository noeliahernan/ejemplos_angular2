import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';

import { NgReduxModule } from 'ng2-redux';
import { CounterComponent }   from './components/counter/counter.component';
import { CounterActions } from './actions/counter.action';

@NgModule({
    imports: [ BrowserModule, NgReduxModule ],
    declarations: [ HomeComponent, CounterComponent ],
    bootstrap: [ HomeComponent ],
    providers: [ CounterActions ]
})

export class AppModule{

}