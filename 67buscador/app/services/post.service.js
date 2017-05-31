"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Post = (function () {
    function Post(id, title, content, keywords) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.keywords = keywords;
    }
    return Post;
}());
exports.Post = Post;
var POSTS = [
    new Post(1, 'Curso de Angular 2', 'Aprende a trabajar con Angular 2 desde 0', ['angular2', 'curso angular 2']),
    new Post(2, 'Curso de AdonisJS', 'Un potente framework para Nodejs', ['adonisjs', 'curso adonis']),
    new Post(3, 'Curso de Php 7', 'Uno de los lenguajes más utilizados', ['php', 'php 7'])
];
var FETCH_LATENCY = 500;
var PostService = (function () {
    function PostService() {
    }
    PostService.prototype.getPosts = function () {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve(POSTS); }, FETCH_LATENCY);
        });
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map