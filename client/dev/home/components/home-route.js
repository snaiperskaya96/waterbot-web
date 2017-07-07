"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const home_cmp_1 = require("../components/home-cmp");
const routes = [
    {
        path: "",
        component: home_cmp_1.HomeCmp,
        pathMatch: "full"
    }
];
exports.HomeRouting = router_1.RouterModule.forRoot(routes);
