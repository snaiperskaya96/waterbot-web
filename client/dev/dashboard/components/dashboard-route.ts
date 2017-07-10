import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	DashboardCmp
} from "../components/dashboard-cmp";

import { ModuleWithProviders} from '@angular/core';

const dashboardRoutes:Routes = [
	{
		path: "dashboard",
		component: DashboardCmp,
		pathMatch: "full"
	}
]

export const dashboardRouting = RouterModule.forRoot(dashboardRoutes);
