import {Injectable} from '@angular/core';

export class Post {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public keywords: Array<string>
    ) { }
}

const POSTS: Post[] = [
    new Post(1, 'Curso de Angular 2', 'Aprende a trabajar con Angular 2 desde 0', ['angular2', 'curso angular 2']),
    new Post(2, 'Curso de AdonisJS', 'Un potente framework para Nodejs', ['adonisjs', 'curso adonis']),
    new Post(3, 'Curso de Php 7', 'Uno de los lenguajes más utilizados', ['php', 'php 7'])
];

const FETCH_LATENCY = 500;

@Injectable()
export class PostService
{
    getPosts() {
        return new Promise<Post[]>(resolve => {
            setTimeout(() => { resolve(POSTS); }, FETCH_LATENCY);
        });
    }
}