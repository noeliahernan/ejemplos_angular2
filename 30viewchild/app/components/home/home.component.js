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
var counter_component_1 = require('../counter/counter.component');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    __decorate([
        core_1.ViewChild(counter_component_1.CounterComponent), 
        __metadata('design:type', counter_component_1.CounterComponent)
    ], HomeComponent.prototype, "counterComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div>\n        <button (click)=\"counterComponent.increment()\">Incrementar</button>\n        <button (click)=\"counterComponent.decrement()\">Decrementar</button>\n        <counter></counter>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map