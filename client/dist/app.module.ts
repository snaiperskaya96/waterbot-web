import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule  } from "@angular/platform-browser";
import { App }   from "./app";
import { TodoCmp }   from "./todo/components/todo-cmp";
import { todoRouting } from "./todo/components/todo-route";
import { TodoService }   from "./todo/services/todo-service";
//import { loginRouting } from "./login/components/login-route";
import { LoginCmp } from "./login/components/login-cmp";
import { UserService } from "./login/services/user-service";
import { dashboardRouting } from "./dashboard/components/dashboard-route";
import { DashboardCmp } from "./dashboard/components/dashboard-cmp";
import { SidebarComponent } from "./dashboard/components/sidebar/sidebar.component";
import { NavbarComponent } from "./dashboard/components/navbar/navbar.component";
import { FooterComponent } from "./dashboard/components/footer/footer.component";
import { HomeRouting } from "client/dev/home/components/home-route";
import { HomeCmp } from "client/dev/home/components/home-cmp";
import { NotifyService } from "client/dev/services/notify.service";
import { SettingsRouting } from "client/dev/settings/components/settings-route";
import { SettingsCmp } from "client/dev/settings/components/settings-cmp";
import { SettingsPlantsCmp } from "client/dev/settings/components/settings-plants";
import { SettingsApiCmp } from "client/dev/settings/components/settings-api";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      todoRouting,
      HomeRouting,
      SettingsRouting
    ],
    declarations: [
      App,
      TodoCmp,
      LoginCmp,
      DashboardCmp,
      SidebarComponent,
      NavbarComponent,
      FooterComponent,
      HomeCmp,
      SettingsCmp,
      SettingsApiCmp,
      SettingsPlantsCmp
    ],
    providers: [
      TodoService,
      UserService,
      NotifyService
    ],
    bootstrap: [
      App,
    ],
})
export class AppModule {}
