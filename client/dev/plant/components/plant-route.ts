import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	CustomScheduleCmp
} from "./custom-schedule";

import { ModuleWithProviders} from '@angular/core';

const routes:Routes = [
	{
		path: "custom-schedule",
		component: CustomScheduleCmp,
		pathMatch: "full"
	}
]

export const PlantRouting = RouterModule.forRoot(routes);
