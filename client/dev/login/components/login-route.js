"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_cmp_1 = require("../components/login-cmp");
var loginRoutes = [
    {
        path: "",
        component: login_cmp_1.LoginCmp,
        pathMatch: "full"
    }
];
exports.loginRouting = router_1.RouterModule.forRoot(loginRoutes);
