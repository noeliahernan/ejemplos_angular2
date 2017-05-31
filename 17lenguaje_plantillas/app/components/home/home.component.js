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
var HomeComponent = (function () {
    function HomeComponent() {
        this.users = ["iparra", "iparra", 'silvia', 'juan', 'andrés', 'manuel'];
        this.show = true;
        this.disabled = true;
        this.isBrand = true;
        this.bugType = 10;
        this.canSave = true;
        this.isUnchanged = true;
        this.isSpecial = false;
    }
    HomeComponent.prototype.displayUser = function (user) {
        console.log(user);
    };
    HomeComponent.prototype.setStyles = function () {
        var styles = {
            // CSS property names
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-weight': !this.isUnchanged ? 'bold' : 'normal',
            'font-size': this.isSpecial ? '32px' : '14px',
            'color': this.isBrand ? '#EF997D' : 'black'
        };
        return styles;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'home.html',
            styles: ["\n        .brand{ color: #EF997D; text-decoration: underline;}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map