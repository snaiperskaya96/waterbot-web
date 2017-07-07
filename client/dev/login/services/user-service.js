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
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
const core_2 = require("angular2-cookie/core");
let UserService = UserService_1 = class UserService {
    constructor(_http, cookie) {
        this._http = _http;
        this.cookie = cookie;
        this.authenticationCallbacks = [];
    }
    login(username, password) {
        return this._http
            .post(UserService_1.ENDPOINT + "authenticate", {
            username: username,
            password: password
        })
            .map((r) => r.json());
    }
    getApiTokens() {
        return this._http
            .get(UserService_1.ENDPOINT + "tokens")
            .map(r => r.json());
    }
    newApiToken() {
        return this._http
            .post(UserService_1.ENDPOINT + "tokens", {})
            .map(r => r.json());
    }
    deleteApiToken(token) {
        return this._http
            .post(UserService_1.ENDPOINT + "tokens/delete", { token: token })
            .map(r => r.json());
    }
    logout() {
        this.cookie.remove('wb_token');
        this.authorized(false);
    }
    verify(token) {
        return this._http
            .get(UserService_1.ENDPOINT + "verify")
            .map(r => r.json());
    }
    observeAuthentication(callback) {
        this.authenticationCallbacks.push(callback);
    }
    authorized(isAuthorized) {
        this.authenticationCallbacks.forEach(callback => {
            callback(isAuthorized);
        });
    }
};
UserService.ENDPOINT = "/api/user/";
UserService = UserService_1 = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http)),
    __metadata("design:paramtypes", [http_1.Http, core_2.CookieService])
], UserService);
exports.UserService = UserService;
var UserService_1;
