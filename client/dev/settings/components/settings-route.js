"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var settings_cmp_1 = require("./settings-cmp");
var settingsRoutes = [
    {
        path: "settings",
        component: settings_cmp_1.SettingsCmp,
        pathMatch: "full"
    }
];
exports.SettingsRouting = router_1.RouterModule.forRoot(settingsRoutes);
