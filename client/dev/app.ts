import {
	Component
} from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from 'angular2-cookie/core';
import { UserService } from "./services/user.service";

@Component({
	selector: "app",
	templateUrl: "app.html",
    providers: [CookieService, UserService]
})
export class App {
	private loggedIn: boolean;

	constructor(private router:Router, private cookie:CookieService, private userService:UserService) {
		const auth = this.cookie.getObject('u');
		this.loggedIn = auth ? auth['a'] : false;
		this.authenticationCheck();
		this.userService.observeAuthentication(isAuthenticated => {
			this.loggedIn = isAuthenticated;
		})
		return;
	}

	private authenticationCheck() {
		const token = this.cookie.get('wb_token');
		if(token) {
			this.userService.verify(token).subscribe(isAuthenticated => {
				this.loggedIn = isAuthenticated;
				this.cookie.putObject('u', {a: isAuthenticated});
				if (!isAuthenticated) {
					this.cookie.remove('wb_token');
					this.router.navigateByUrl('/');
				}
			});
		} else {
			this.loggedIn = false;
			this.cookie.putObject('u', {a: false});
			this.cookie.remove('wb_token');
			this.router.navigateByUrl('/');
		}
	}
}
