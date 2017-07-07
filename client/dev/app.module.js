"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const platform_browser_1 = require("@angular/platform-browser");
const app_1 = require("./app");
const todo_cmp_1 = require("./todo/components/todo-cmp");
const todo_route_1 = require("./todo/components/todo-route");
const todo_service_1 = require("./todo/services/todo-service");
//import { loginRouting } from "./login/components/login-route";
const login_cmp_1 = require("./login/components/login-cmp");
const user_service_1 = require("./login/services/user-service");
const dashboard_cmp_1 = require("./dashboard/components/dashboard-cmp");
const sidebar_component_1 = require("./dashboard/components/sidebar/sidebar.component");
const navbar_component_1 = require("./dashboard/components/navbar/navbar.component");
const footer_component_1 = require("./dashboard/components/footer/footer.component");
const home_route_1 = require("client/dev/home/components/home-route");
const home_cmp_1 = require("client/dev/home/components/home-cmp");
const notify_service_1 = require("client/dev/services/notify.service");
const settings_route_1 = require("client/dev/settings/components/settings-route");
const settings_cmp_1 = require("client/dev/settings/components/settings-cmp");
const settings_plants_1 = require("client/dev/settings/components/settings-plants");
const settings_api_1 = require("client/dev/settings/components/settings-api");
let AppModule = class AppModule {
};
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
            settings_plants_1.SettingsPlantsCmp
        ],
        providers: [
            todo_service_1.TodoService,
            user_service_1.UserService,
            notify_service_1.NotifyService
        ],
        bootstrap: [
            app_1.App,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
