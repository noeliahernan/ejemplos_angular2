import {Injectable} from '@angular/core';

export class Hero {
    constructor(public id: number, public name: string) { }
}

const HEROES: Hero[] = [
    new Hero(1, 'Hero1'),
    new Hero(2, 'Hero2'),
    new Hero(3, 'Hero3')
];

const FETCH_LATENCY = 500;

@Injectable()
export class HeroService
{
    getHeroes(): Promise<Hero[]>
    {
        return new Promise<Hero[]>(resolve => {
            setTimeout(() => { resolve(HEROES); }, FETCH_LATENCY);
        });
    }

    getHero(id: number | string): Promise<Hero>
    {
        return new Promise<Hero>(resolve => {
            setTimeout(() => {
                resolve(HEROES.filter(hero => hero.id === +id)[0]);
            }, FETCH_LATENCY);
        });
    }
}