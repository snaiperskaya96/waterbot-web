import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	HomeCmp
} from "../components/home-cmp";

const routes:Routes = [
	{
		path: "",
		component: HomeCmp,
		pathMatch: "full"
	}
]

export const HomeRouting = RouterModule.forRoot(routes);
