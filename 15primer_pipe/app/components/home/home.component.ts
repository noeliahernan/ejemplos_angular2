import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    {{ courses | join: '<>': '{}'}}
    `
})
export class HomeComponent
{
    courses: Array<string> = [
        "angular2", "meteor", "reactjs", "vuejs", "adonisjs", "laravel5", "codeigniter3"
    ]
}