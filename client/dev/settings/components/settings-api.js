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
const user_service_1 = require("client/dev/login/services/user-service");
let SettingsApiCmp = class SettingsApiCmp {
    constructor(userService) {
        this.userService = userService;
        this.tokens = [];
        this.canAddNewToken = true;
        userService.getApiTokens().subscribe(tokens => this.tokens = tokens);
    }
    generateNewToken() {
        if (!this.canAddNewToken)
            return;
        this.userService.newApiToken().subscribe(token => {
            if (token) {
                this.tokens.push(token);
            }
        });
        this.canAddNewToken = false;
        setTimeout(() => this.canAddNewToken = true, 5000);
    }
    deleteToken(token) {
        this.userService.deleteApiToken(token).subscribe(result => {
            if (result) {
                this.tokens = this.tokens.filter(item => item !== token);
            }
        });
    }
};
SettingsApiCmp = __decorate([
    core_1.Component({
        selector: "settings-api-cmp",
        templateUrl: "settings/templates/settings-api.html",
        styleUrls: ["settings/styles/settings-api.css"],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], SettingsApiCmp);
exports.SettingsApiCmp = SettingsApiCmp;
