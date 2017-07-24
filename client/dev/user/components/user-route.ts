import {
	Routes,
	RouterModule
} from "@angular/router";

import { ProfileCmp } from "./profile";

import { ModuleWithProviders} from '@angular/core';
import { AdminSettingsCmp } from "./admin-settings";

const userRoutes:Routes = [
	{
		path: "profile",
		component: ProfileCmp,
		pathMatch: "full"
	},
	{
		path: "admin",
		component: AdminSettingsCmp,
		pathMatch: "full"
	}
]

export const UserRouting = RouterModule.forRoot(userRoutes);
