import {Component} from '@angular/core';
import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer } from '../../reducers/index';

@Component({
    selector: 'my-app',
    template: `
    <h1>Contador con Angular 2 + Redux</h1>
    <counter></counter>
    `
})
export class HomeComponent
{
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private devTools: DevToolsExtension
    )
    {
        this.ngRedux.configureStore(
            rootReducer,
            {},
            [],
            [ devTools.isEnabled() ? devTools.enhancer() : f => f]
        )
    }
}