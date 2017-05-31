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
var forms_1 = require('@angular/forms');
var admin_component_1 = require('./components/administration/admin/admin.component');
var notes_admin_component_1 = require('./components/administration/notes/notes-admin.component');
var messages_admin_component_1 = require('./components/administration/messages/messages-admin.component');
var home_admin_component_1 = require('./components/administration/home/home-admin.component');
var notes_admin_detail_component_1 = require('./components/administration/notes/notes-admin-detail.component');
var api_service_1 = require('./services/api.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, forms_1.FormsModule],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                profile_component_1.ProfileComponent,
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                login_component_1.LoginComponent,
                admin_component_1.AdminComponent,
                notes_admin_component_1.NotesAdminComponent,
                messages_admin_component_1.MessagesAdminComponent,
                home_admin_component_1.HomeAdminComponent,
                notes_admin_detail_component_1.NotesAdminDetailComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [auth_service_1.AuthService, auth_guard_1.AuthGuard, api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map