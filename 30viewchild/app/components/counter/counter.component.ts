import {Component} from '@angular/core';

@Component({
    selector: 'counter',
    template: `
        <div>{{ total }}</div>
    `
})

export class CounterComponent
{
    total: number = 0;

    public increment(): void {
        this.total++;
    }

    public decrement(): void {
        this.total--;
    }
}