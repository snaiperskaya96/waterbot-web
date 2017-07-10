"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var settings_cmp_1 = require("./settings-cmp");
var settings_api_1 = require("./settings-api");
var settings_plants_1 = require("./settings-plants");
var settingsRoutes = [
    {
        path: "settings",
        component: settings_cmp_1.SettingsCmp,
        pathMatch: "full"
    },
    {
        path: "settings/api",
        component: settings_api_1.SettingsApiCmp,
        pathMatch: "full"
    },
    {
        path: "settings/plants",
        component: settings_plants_1.SettingsPlantsCmp,
        pathMatch: "full"
    }
];
exports.SettingsRouting = router_1.RouterModule.forRoot(settingsRoutes);
