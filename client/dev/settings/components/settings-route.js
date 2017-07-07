"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const settings_cmp_1 = require("./settings-cmp");
const settingsRoutes = [
    {
        path: "settings",
        component: settings_cmp_1.SettingsCmp,
        pathMatch: "full"
    }
];
exports.SettingsRouting = router_1.RouterModule.forRoot(settingsRoutes);
