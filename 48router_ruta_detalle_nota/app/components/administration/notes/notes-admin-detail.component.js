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
var NotesAdminDetailComponent = (function () {
    function NotesAdminDetailComponent(route, apiService, router) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
    }
    NotesAdminDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.apiService.getNote(id).then(function (note) { return _this.note = note; });
        });
    };
    NotesAdminDetailComponent.prototype.gotoNotes = function () {
        this.router.navigate(['/administration/notes']);
    };
    NotesAdminDetailComponent = __decorate([
        core_1.Component({
            selector: 'notes-admin-detail',
            template: "\n        <h4>NotesAdminDetail Component</h4>\n        <div *ngIf=\"note\">\n            <h3>\"{{note.text}}\"</h3>\n            <div>\n              <label>Id: </label>\n                 <input [(ngModel)]=\"note.id\" disabled placeholder=\"noteId\"/>\n              </div>\n            <div>\n              <label>Note: </label>\n              <input [(ngModel)]=\"note.text\" placeholder=\"note\"/>\n            </div>\n            <p>\n              <button class=\"waves-effect waves-light btn-large\" (click)=\"gotoNotes()\">Back</button>\n            </p>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, api_service_1.ApiService, router_1.Router])
    ], NotesAdminDetailComponent);
    return NotesAdminDetailComponent;
}());
exports.NotesAdminDetailComponent = NotesAdminDetailComponent;
//# sourceMappingURL=notes-admin-detail.component.js.map