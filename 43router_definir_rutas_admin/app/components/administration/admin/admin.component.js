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
var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'admin',
            template: "\n        <div class=\"container\">\n            <ul class=\"breadcrumb\">\n                <li><a [routerLink]=\"['/administration']\">Admin</a></li>\n                <li><a [routerLink]=\"['/administration/notes']\">Admin Notes</a></li>\n                <li><a [routerLink]=\"['/administration/messages']\">Admin Messages</a></li>\n            </ul>\n            <h3>Administration</h3>\n            <router-outlet></router-outlet>\n        </div>\n    ",
            styles: ["\n    .breadcrumb { \n        width: 100%;\n        list-style: none; \n        overflow: hidden; \n        font: 18px Helvetica, Arial, Sans-Serif;\n    }\n    .breadcrumb li { \n        float: left; \n    }\n    .breadcrumb li a {\n        color: lightcoral;\n        text-decoration: none; \n        padding: 10px 0 10px 65px;\n        position: relative; \n        display: block;\n        float: left;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map