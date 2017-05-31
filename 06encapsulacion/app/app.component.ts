import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    interpolation: ['[[', ']]'],
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .bg{
            background: lightseagreen;
        }
        .bg2{
            background: darkgoldenrod;
        }
    `]
})

export class AppComponent
{
    title: string = "Angular2 App";
    paragraph: string = "Nueva app encapsulando estilos de componentes";
}