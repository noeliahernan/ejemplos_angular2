import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../reducers';

@Injectable()
export class VisibilityFilterActions
{
    constructor(private ngRedux: NgRedux<IAppState>)
    {

    }

    updateFilter(filter: string): void{
        this.ngRedux.dispatch({
            type: filter
        })
    }
}