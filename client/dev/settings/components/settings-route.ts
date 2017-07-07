import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	SettingsCmp
} from "./settings-cmp";

const settingsRoutes:Routes = [
	{
		path: "settings",
		component: SettingsCmp,
		pathMatch: "full"
	}
]

export const SettingsRouting = RouterModule.forRoot(settingsRoutes);
