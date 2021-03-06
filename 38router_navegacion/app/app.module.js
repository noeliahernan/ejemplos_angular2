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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./components/app/app.component');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var profile_component_1 = require('./components/profile/profile.component');
var home_component_1 = require('./components/home/home.component');
var contact_component_1 = require('./components/contact/contact.component');
var login_component_1 = require('./components/login/login.component');
var app_routing_1 = require('./routes/app.routing');
var auth_service_1 = require('./services/auth.service');
var auth_guard_1 = require('./authentication/auth.guard');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                profile_component_1.ProfileComponent,
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                login_component_1.LoginComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [auth_service_1.AuthService, auth_guard_1.AuthGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map