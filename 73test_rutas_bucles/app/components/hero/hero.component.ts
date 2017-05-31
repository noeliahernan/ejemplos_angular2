import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService, Hero } from '../../services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'hero-component',
    templateUrl: 'hero.component.html',
})

export class HeroComponent 
{
    heroes: Hero[];

    constructor(private router: Router, private heroService: HeroService) { }

    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(hero: Hero) {
        let url = `/heroes/${hero.id}`;
        this.router.navigateByUrl(url);
    }
}