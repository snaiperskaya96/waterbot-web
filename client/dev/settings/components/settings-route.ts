import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	SettingsCmp
} from "./settings-cmp";
import { SettingsApiCmp } from "./settings-api";
import { SettingsPlantsCmp } from "./settings-plants";

const settingsRoutes:Routes = [
	{
		path: "settings",
		component: SettingsCmp,
		pathMatch: "full"
	}, 
	{
		path: "settings/api",
		component: SettingsApiCmp,
		pathMatch: "full"
	},
	{
		path: "settings/plants",
		component: SettingsPlantsCmp,
		pathMatch: "full"
	}
]

export const SettingsRouting = RouterModule.forRoot(settingsRoutes);
