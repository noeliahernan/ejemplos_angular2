import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title | lowercase }}</h1>
    <p>{{ paragraph | uppercase }}</p>
    <p>{{ today | date:"dd/MM/yyyy" }}
    <pre>{{ users | json }}</pre>
    `
})
export class HomeComponent
{
    title: string = "Pipes en Angular2";
    paragraph: string = "Parágrafo";
    today: Date = new Date;
    users = ['iparra', 'silvia', 'juan']
}