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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var core_2 = require("angular2-cookie/core");
var UserService = (function () {
    function UserService(_http, cookie) {
        this._http = _http;
        this.cookie = cookie;
        this.authenticationCallbacks = [];
    }
    UserService_1 = UserService;
    UserService.prototype.login = function (username, password) {
        return this._http
            .post(UserService_1.ENDPOINT + "authenticate", {
            username: username,
            password: password
        })
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.getApiTokens = function () {
        return this._http
            .get(UserService_1.ENDPOINT + "tokens")
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.newApiToken = function () {
        return this._http
            .post(UserService_1.ENDPOINT + "tokens", {})
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.deleteApiToken = function (token) {
        return this._http
            .post(UserService_1.ENDPOINT + "tokens/delete", { token: token })
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.logout = function () {
        this.cookie.remove('wb_token');
        this.authorized(false);
    };
    UserService.prototype.verify = function (token) {
        return this._http
            .get(UserService_1.ENDPOINT + "verify")
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.observeAuthentication = function (callback) {
        this.authenticationCallbacks.push(callback);
    };
    UserService.prototype.authorized = function (isAuthorized) {
        this.authenticationCallbacks.forEach(function (callback) {
            callback(isAuthorized);
        });
    };
    UserService.ENDPOINT = "/api/user/";
    UserService = UserService_1 = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __metadata("design:paramtypes", [http_1.Http, core_2.CookieService])
    ], UserService);
    return UserService;
    var UserService_1;
}());
exports.UserService = UserService;
