import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})

export class AppComponent 
{
    title: string = "Angular 2 App";
    paragraph: string = "Nueva app con paso de variables";
}