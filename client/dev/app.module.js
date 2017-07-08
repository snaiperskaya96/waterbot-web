"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_1 = require("./app");
var todo_cmp_1 = require("./todo/components/todo-cmp");
var todo_route_1 = require("./todo/components/todo-route");
var todo_service_1 = require("./todo/services/todo-service");
//import { loginRouting } from "./login/components/login-route";
var login_cmp_1 = require("./login/components/login-cmp");
var user_service_1 = require("./login/services/user-service");
var dashboard_cmp_1 = require("./dashboard/components/dashboard-cmp");
var sidebar_component_1 = require("./dashboard/components/sidebar/sidebar.component");
var navbar_component_1 = require("./dashboard/components/navbar/navbar.component");
var footer_component_1 = require("./dashboard/components/footer/footer.component");
var home_route_1 = require("./home/components/home-route");
var home_cmp_1 = require("./home/components/home-cmp");
var notify_service_1 = require("./services/notify.service");
var settings_route_1 = require("./settings/components/settings-route");
var settings_cmp_1 = require("./settings/components/settings-cmp");
var settings_plants_1 = require("./settings/components/settings-plants");
var settings_api_1 = require("./settings/components/settings-api");
var plant_widget_cmp_1 = require("./plant/components/plant-widget-cmp");
var plant_service_1 = require("./services/plant.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                todo_route_1.todoRouting,
                home_route_1.HomeRouting,
                settings_route_1.SettingsRouting
            ],
            declarations: [
                app_1.App,
                todo_cmp_1.TodoCmp,
                login_cmp_1.LoginCmp,
                dashboard_cmp_1.DashboardCmp,
                sidebar_component_1.SidebarComponent,
                navbar_component_1.NavbarComponent,
                footer_component_1.FooterComponent,
                home_cmp_1.HomeCmp,
                settings_cmp_1.SettingsCmp,
                settings_api_1.SettingsApiCmp,
                settings_plants_1.SettingsPlantsCmp,
                plant_widget_cmp_1.PlantWidgetCmp
            ],
            providers: [
                todo_service_1.TodoService,
                user_service_1.UserService,
                notify_service_1.NotifyService,
                plant_service_1.PlantService
            ],
            bootstrap: [
                app_1.App,
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
