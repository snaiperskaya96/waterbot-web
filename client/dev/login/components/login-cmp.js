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
const user_service_1 = require("../services/user-service");
const router_1 = require("@angular/router");
const core_2 = require("angular2-cookie/core");
let LoginCmp = class LoginCmp {
    constructor(userService, router, cookie) {
        this.userService = userService;
        this.router = router;
        this.cookie = cookie;
        userService
            .verify(cookie.get('wb_token'))
            .subscribe(isAuthenticated => {
            this.userService.authorized(isAuthenticated);
        });
    }
    ngOnInit() {
        $.getScript('../../../assets/js/login.js');
        this._getAll();
    }
    _getAll() {
        /*this._todoService
            .getAll()
            .subscribe((todos) => {
              this.todos = todos;
            });
            */
    }
    add(message) {
    }
    remove(id) {
    }
    register() {
        alert('yay');
    }
    login() {
        this.userService.login(this.username, this.password).subscribe(response => {
            if (response.token) {
                this.userService.authorized(response.token ? true : false);
                this.cookie.putObject('u', { a: true });
            }
        });
    }
    submit() {
        this.login();
    }
};
LoginCmp = __decorate([
    core_1.Component({
        selector: "login-cmp",
        templateUrl: "login/templates/index.html",
        styleUrls: ["login/styles/index.css"],
        providers: [core_2.CookieService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        core_2.CookieService])
], LoginCmp);
exports.LoginCmp = LoginCmp;
