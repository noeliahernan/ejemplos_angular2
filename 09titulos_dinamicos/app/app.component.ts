import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'my-app',
    template: '<h2>¡¡¡Hola Mundo con Angular 2!!!</h2>'
})

export class AppComponent 
{
    public constructor(private titleService: Title)
    {
        
    }

    ngOnInit()
    {
        this.titleService.setTitle('Curso de Angular 2');
    }
}