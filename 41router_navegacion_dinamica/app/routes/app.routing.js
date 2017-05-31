"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('../components/dashboard/dashboard.component');
var profile_component_1 = require('../components/profile/profile.component');
var home_component_1 = require('../components/home/home.component');
var contact_component_1 = require('../components/contact/contact.component');
var login_component_1 = require('../components/login/login.component');
var auth_guard_1 = require('../authentication/auth.guard');
var appRoutes = [
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map