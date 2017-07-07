"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let HomeCmp = class HomeCmp {
    constructor() {
        this.name = `yo, I"m your home component :D`;
    }
};
HomeCmp = __decorate([
    core_1.Component({
        selector: "home-cmp",
        templateUrl: "home/templates/home.html",
        styleUrls: ["home/styles/home.css"]
    })
], HomeCmp);
exports.HomeCmp = HomeCmp;
