"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_cmp_1 = require("../components/dashboard-cmp");
var dashboardRoutes = [
    {
        path: "dashboard",
        component: dashboard_cmp_1.DashboardCmp,
        pathMatch: "full"
    }
];
exports.dashboardRouting = router_1.RouterModule.forRoot(dashboardRoutes);
