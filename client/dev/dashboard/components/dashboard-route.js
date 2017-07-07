"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const dashboard_cmp_1 = require("../components/dashboard-cmp");
const dashboardRoutes = [
    {
        path: "dashboard",
        component: dashboard_cmp_1.DashboardCmp,
        pathMatch: "full"
    }
];
exports.dashboardRouting = router_1.RouterModule.forRoot(dashboardRoutes);
