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
var PlantWidgetEditCmp = (function () {
    function PlantWidgetEditCmp() {
        this.plant = {
            name: '',
            nickname: '',
            botId: ''
        };
    }
    PlantWidgetEditCmp.prototype.show = function (plant, callBack) {
        this.plant = plant;
        this.callBack = callBack;
        this.modal.show();
    };
    PlantWidgetEditCmp.prototype.onSubmit = function () {
        this.callBack(this.plant);
        this.modal.hide();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", Object)
    ], PlantWidgetEditCmp.prototype, "modal", void 0);
    PlantWidgetEditCmp = __decorate([
        core_1.Component({
            selector: "plant-widget-edit-cmp",
            templateUrl: "plant/templates/plant-widget-edit.html",
            styleUrls: ["plant/styles/plant-widget-edit.css"]
        })
    ], PlantWidgetEditCmp);
    return PlantWidgetEditCmp;
}());
exports.PlantWidgetEditCmp = PlantWidgetEditCmp;
