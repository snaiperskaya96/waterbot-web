"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const core_2 = require("angular2-cookie/core");
const user_service_1 = require("./login/services/user-service");
let App = class App {
    constructor(router, cookie, userService) {
        this.router = router;
        this.cookie = cookie;
        this.userService = userService;
        const auth = this.cookie.getObject('u');
        this.loggedIn = auth ? auth['a'] : false;
        this.authenticationCheck();
        this.userService.observeAuthentication(isAuthenticated => {
            this.loggedIn = isAuthenticated;
        });
        return;
    }
    authenticationCheck() {
        const token = this.cookie.get('wb_token');
        if (token) {
            this.userService.verify(token).subscribe(isAuthenticated => {
                this.loggedIn = isAuthenticated;
                this.cookie.putObject('u', { a: isAuthenticated });
                if (!isAuthenticated)
                    this.router.navigateByUrl('/');
            });
        }
        else {
            this.loggedIn = false;
            this.cookie.putObject('u', { a: false });
            this.router.navigateByUrl('/');
        }
    }
};
App = __decorate([
    core_1.Component({
        selector: "app",
        templateUrl: "app.html",
        providers: [core_2.CookieService, user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.Router, core_2.CookieService, user_service_1.UserService])
], App);
exports.App = App;
