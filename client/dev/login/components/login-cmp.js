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
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user-service");
var router_1 = require("@angular/router");
var core_2 = require("angular2-cookie/core");
var LoginCmp = (function () {
    function LoginCmp(userService, router, cookie) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.cookie = cookie;
        userService
            .verify(cookie.get('wb_token'))
            .subscribe(function (isAuthenticated) {
            _this.userService.authorized(isAuthenticated);
        });
    }
    LoginCmp.prototype.ngOnInit = function () {
        $.getScript('../../../assets/js/login.js');
        this._getAll();
    };
    LoginCmp.prototype._getAll = function () {
        /*this._todoService
            .getAll()
            .subscribe((todos) => {
              this.todos = todos;
            });
            */
    };
    LoginCmp.prototype.add = function (message) {
    };
    LoginCmp.prototype.remove = function (id) {
    };
    LoginCmp.prototype.register = function () {
        alert('yay');
    };
    LoginCmp.prototype.login = function () {
        var _this = this;
        this.userService.login(this.username, this.password).subscribe(function (response) {
            if (response.token) {
                _this.userService.authorized(response.token ? true : false);
                _this.cookie.putObject('u', { a: true });
            }
        });
    };
    LoginCmp.prototype.submit = function () {
        this.login();
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
    return LoginCmp;
}());
exports.LoginCmp = LoginCmp;
