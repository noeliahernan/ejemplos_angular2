import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Declarations } from './exports/declarations/index';

import { NgReduxModule } from 'ng2-redux';
import { TodoActions } from './actions/todo.actions';
import { VisibilityFilterActions } from './actions/visibility-filter.actions';

@NgModule({
    imports: [ BrowserModule, FormsModule, NgReduxModule ],
    declarations: [ ...Declarations ],
    bootstrap: [ Declarations[0] ],
    providers:    [TodoActions, VisibilityFilterActions]
})

export class AppModule{

}