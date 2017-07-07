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
var SettingsCmp = (function () {
    function SettingsCmp() {
        this.menu = [
            { name: 'API', class: 'active', id: 0 },
            { name: 'Plants', class: '', id: 1 }
        ];
        this.components = ['settings-api-cmp', 'settings-plants-cmp'];
        this.setActiveComponent(0);
    }
    SettingsCmp.prototype.setActiveComponent = function (component) {
        var _this = this;
        this.menu.forEach(function (voice, id) {
            if (voice.id == component) {
                _this.menu[id].class = 'active';
                _this.activeComponent = _this.components[voice.id];
            }
            else {
                _this.menu[id].class = '';
            }
        });
    };
    SettingsCmp = __decorate([
        core_1.Component({
            selector: "settings-cmp",
            templateUrl: "settings/templates/settings.html",
            styleUrls: ["settings/styles/settings.css"]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsCmp);
    return SettingsCmp;
}());
exports.SettingsCmp = SettingsCmp;
