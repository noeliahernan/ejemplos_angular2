import {Component} from '@angular/core';
import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer } from '../../reducers/index';
const createLogger = require('redux-logger');

@Component({
    selector: 'my-app',
    template: `
    <h2>TodoApp con Angular2 + Redux</h2>
    <filter-select></filter-select>
    <todo-list></todo-list>
    `
})
export class HomeComponent
{
    constructor(private ngRedux: NgRedux, private devTool: DevToolsExtension)
    {
        this.ngRedux.configureStore(
            rootReducer, 
            {},
            [ createLogger() ],
            [ devTool.isEnabled() ? devTool.enhancer() : f => f ]
        )
    }
}