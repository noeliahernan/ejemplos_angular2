import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';

@Injectable()
export class CounterActions
{
    constructor(private ngRedux: NgRedux<IAppState>){

    }

    static INCREMENT_COUNTER: string = "INCREMENT_COUNTER";
    static DECREMENT_COUNTER: string = "DECREMENT_COUNTER";

    increment(): void 
    {
        this.ngRedux.dispatch({
            type: CounterActions.INCREMENT_COUNTER
        });
    }

    decrement(): void 
    {
        this.ngRedux.dispatch({
            type: CounterActions.DECREMENT_COUNTER
        });
    }
}