import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ helloWorld | titlecase }}</h1>
        <p class="app" (click)="hello()">Hello</p>
        <note-cmp></note-cmp>
    `
})
export class AppComponent 
{ 
    helloWorld: string = "hola mundo";

    hello(): void {
        this.helloWorld = "¡¡HELLO WORLD!!!";
    }
}
