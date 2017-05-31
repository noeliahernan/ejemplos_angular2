import { Component, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <button (click)="counterComponent.increment()">Incrementar</button>
        <button (click)="counterComponent.decrement()">Decrementar</button>
        <counter></counter>
    </div>
    `
})
export class HomeComponent
{
    @ViewChild(CounterComponent) counterComponent: CounterComponent;
}