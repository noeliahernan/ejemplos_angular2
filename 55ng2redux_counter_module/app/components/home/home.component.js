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
var ng2_redux_1 = require('ng2-redux');
var index_1 = require('../../reducers/index');
var HomeComponent = (function () {
    function HomeComponent(ngRedux, devTools) {
        this.ngRedux = ngRedux;
        this.devTools = devTools;
        this.ngRedux.configureStore(index_1.rootReducer, {}, [], [devTools.isEnabled() ? devTools.enhancer() : function (f) { return f; }]);
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>Contador con Angular 2 + Redux</h1>\n    <counter></counter>\n    "
        }), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux, ng2_redux_1.DevToolsExtension])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map