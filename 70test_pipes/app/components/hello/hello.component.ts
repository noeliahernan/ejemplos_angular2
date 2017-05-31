import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    template: `
        <h1>{{ helloWorld }}</h1>
        <p class="hello" (click)="hello()">Hello</p>
    `
})
export class HelloComponent 
{ 
    helloWorld: string = "hola mundo";

    hello(): void {
        this.helloWorld = "¡¡HELLO WORLD!!!";
    }
}
