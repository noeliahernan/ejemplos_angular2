import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { CounterActions } from '../../actions/counter.action';

@Component({
    selector: 'counter',
    template: `
    <p>
        Pulsado: {{ counter$ | async }} veces.
        <br>
        <button (click)="actions.increment()">Incrementar</button>
        <button (click)="actions.decrement()">Decrementar</button>
    </p>
    `
})
export class CounterComponent
{
    @select('counter') counter$: Observable<number>;
    
    constructor(private actions: CounterActions)
    {

    }
}
