import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    interpolation: ['[[', ']]'],
    styleUrls: ['./app/app.css']
})

export class AppComponent
{
    title: string = "Angular2 App";
    paragraph: string = "Nueva app encapsulando estilos de componentes";
}