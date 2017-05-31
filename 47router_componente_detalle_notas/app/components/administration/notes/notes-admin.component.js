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
var api_service_1 = require('../../../services/api.service');
var router_1 = require('@angular/router');
var NotesAdminComponent = (function () {
    function NotesAdminComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    NotesAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getNotes().then(function (notes) { return _this.notes = notes; });
    };
    NotesAdminComponent.prototype.onSelect = function (note) {
        this.router.navigate(['/administration/notes', note.id]);
    };
    NotesAdminComponent = __decorate([
        core_1.Component({
            selector: 'notes-admin',
            template: "\n        <h4>NotesAdmin Component</h4>\n        <div class=\"collection\">\n          <a class=\"collection-item\" *ngFor=\"let note of notes\" (click)=\"onSelect(note)\">\n            {{note.id}}: {{note.text}}\n          </a>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, router_1.Router])
    ], NotesAdminComponent);
    return NotesAdminComponent;
}());
exports.NotesAdminComponent = NotesAdminComponent;
//# sourceMappingURL=notes-admin.component.js.map