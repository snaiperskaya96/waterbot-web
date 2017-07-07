"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_cmp_1 = require("../components/home-cmp");
var routes = [
    {
        path: "",
        component: home_cmp_1.HomeCmp,
        pathMatch: "full"
    }
];
exports.HomeRouting = router_1.RouterModule.forRoot(routes);
