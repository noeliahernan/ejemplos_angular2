"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('../components/dashboard/dashboard.component');
var profile_component_1 = require('../components/profile/profile.component');
var home_component_1 = require('../components/home/home.component');
var contact_component_1 = require('../components/contact/contact.component');
var login_component_1 = require('../components/login/login.component');
var auth_guard_1 = require('../authentication/auth.guard');
/*** ADMIN COMPONENTS ****/
var admin_component_1 = require('../components/administration/admin/admin.component');
var notes_admin_component_1 = require('../components/administration/notes/notes-admin.component');
var messages_admin_component_1 = require('../components/administration/messages/messages-admin.component');
var home_admin_component_1 = require('../components/administration/home/home-admin.component');
/*** END ADMIN COMPONENTS ****/
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
    },
    {
        path: 'administration',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: '',
                component: home_admin_component_1.HomeAdminComponent,
            },
            {
                path: 'notes',
                component: notes_admin_component_1.NotesAdminComponent
            },
            {
                path: 'messages',
                component: messages_admin_component_1.MessagesAdminComponent
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map