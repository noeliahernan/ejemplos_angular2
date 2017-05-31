import {Component} from '@angular/core';
import { VisibilityFilterActions } from '../../actions/visibility-filter.actions';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'filter-select',
    template: `
    <hr />
    <div>
        <ul>
            <li 
                style="margin-right: 10px" 
                class="waves-effect waves-light btn green"
                (click)="actions.updateFilter(filter.action)" 
                *ngFor="let filter of filters">
                {{ filter.name }}
            </li>
        </ul>
    </div>
    `
})
export class FilterSelectComponent
{
    public filters = [
        { name: 'Ver todos', action: 'SHOW_ALL'},
        { name: 'Ver completados', action: 'SHOW_COMPLETED'},
        { name: 'Ver activos', action: 'SHOW_ACTIVES'}
    ];

    @select('visibilityFilter') visibilityFilter$: Observable<any>[];

    constructor(private actions: VisibilityFilterActions)
    {

    }
}