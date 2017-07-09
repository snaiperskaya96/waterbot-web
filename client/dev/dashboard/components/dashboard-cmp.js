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
var modal_service_1 = require("../../services/modal.service");
var DashboardCmp = (function () {
    function DashboardCmp(modalService) {
        this.modalService = modalService;
        this.name = "yo, I\"m your component :D";
    }
    DashboardCmp.prototype.ngOnInit = function () {
        $.getScript('../../assets/js/material-dashboard.js');
        $.getScript('../../assets/js/initMenu.js');
        //register modals
        this.modalService.set(modal_service_1.ModalService.PLANT_EDIT, this.plantEditModal);
    };
    __decorate([
        core_1.ViewChild('plantEditModal'),
        __metadata("design:type", Object)
    ], DashboardCmp.prototype, "plantEditModal", void 0);
    DashboardCmp = __decorate([
        core_1.Component({
            selector: "dashboard-cmp",
            templateUrl: "dashboard/templates/dashboard.html",
            styleUrls: ["dashboard/styles/dashboard.css"]
        }),
        __metadata("design:paramtypes", [modal_service_1.ModalService])
    ], DashboardCmp);
    return DashboardCmp;
}());
exports.DashboardCmp = DashboardCmp;
