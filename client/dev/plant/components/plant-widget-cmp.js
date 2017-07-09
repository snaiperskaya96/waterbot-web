"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var modal_service_1 = require("../../services/modal.service");
var plant_service_1 = require("../../services/plant.service");
var PlantWidgetCmp = (function () {
    function PlantWidgetCmp(modalService, plantService) {
        this.modalService = modalService;
        this.plantService = plantService;
        this.colWidth = '3';
    }
    PlantWidgetCmp.prototype.show = function () {
        var _this = this;
        this.modalService.get(modal_service_1.ModalService.PLANT_EDIT).show(__assign({}, this.plant), function (plant) { _this.onPlantSave(plant); });
    };
    PlantWidgetCmp.prototype.onPlantSave = function (plant) {
        this.plant = plant;
        this.plantService.save(plant).subscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlantWidgetCmp.prototype, "colWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlantWidgetCmp.prototype, "plant", void 0);
    PlantWidgetCmp = __decorate([
        core_1.Component({
            selector: "plant-widget-cmp",
            templateUrl: "plant/templates/plant-widget.html",
            styleUrls: ["plant/styles/plant-widget.css"],
            providers: [plant_service_1.PlantService]
        }),
        __metadata("design:paramtypes", [modal_service_1.ModalService,
            plant_service_1.PlantService])
    ], PlantWidgetCmp);
    return PlantWidgetCmp;
}());
exports.PlantWidgetCmp = PlantWidgetCmp;
