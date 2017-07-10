import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	HomeCmp
} from "../components/home-cmp";

import { ModuleWithProviders} from '@angular/core';

const routes:Routes = [
	{
		path: "",
		component: HomeCmp,
		pathMatch: "full"
	}
]

export const HomeRouting = RouterModule.forRoot(routes);
