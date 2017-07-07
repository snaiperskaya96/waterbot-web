import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	DashboardCmp
} from "../components/dashboard-cmp";

const dashboardRoutes:Routes = [
	{
		path: "dashboard",
		component: DashboardCmp,
		pathMatch: "full"
	}
]

export const dashboardRouting = RouterModule.forRoot(dashboardRoutes);
