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
var Note = (function () {
    function Note(id, text) {
        this.id = id;
        this.text = text;
    }
    return Note;
}());
exports.Note = Note;
var NOTES = [
    new Note(1, 'Nota1'),
    new Note(2, 'Nota2'),
    new Note(3, 'Nota3')
];
var FETCH_LATENCY = 500;
var ApiService = (function () {
    function ApiService() {
    }
    ApiService.prototype.getNotes = function () {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve(NOTES); }, FETCH_LATENCY);
        });
    };
    ApiService.prototype.getNote = function (id) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(NOTES.filter(function (note) { return note.id === +id; })[0]);
            }, FETCH_LATENCY);
        });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map