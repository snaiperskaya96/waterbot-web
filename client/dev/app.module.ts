import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule  } from "@angular/platform-browser";
import { App }   from "./app";
//import { loginRouting } from "./login/components/login-route";
import { LoginCmp } from "./login/components/login-cmp";
import { UserService } from "./login/services/user-service";
import { dashboardRouting } from "./dashboard/components/dashboard-route";
import { DashboardCmp } from "./dashboard/components/dashboard-cmp";
import { SidebarComponent } from "./dashboard/components/sidebar/sidebar.component";
import { NavbarComponent } from "./dashboard/components/navbar/navbar.component";
import { FooterComponent } from "./dashboard/components/footer/footer.component";
import { HomeRouting } from "./home/components/home-route";
import { HomeCmp } from "./home/components/home-cmp";
import { NotifyService } from "./services/notify.service";
import { SettingsRouting } from "./settings/components/settings-route";
import { SettingsCmp } from "./settings/components/settings-cmp";
import { SettingsPlantsCmp } from "./settings/components/settings-plants";
import { SettingsApiCmp } from "./settings/components/settings-api";
import { PlantWidgetCmp } from "./plant/components/plant-widget-cmp";
import { PlantService } from "./services/plant.service";
import { PlantWidgetEditCmp } from "./plant/components/plant-widget-edit";
import { ModalCmp } from "./shared/components/modal";
import { ModalService } from "./services/modal.service";
import 'fullcalendar';
import { CalendarComponent } from "ap-angular2-fullcalendar/src/calendar/calendar";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      HomeRouting,
      SettingsRouting
    ],
    declarations: [
      App,
      LoginCmp,
      DashboardCmp,
      SidebarComponent,
      NavbarComponent,
      FooterComponent,
      HomeCmp,
      SettingsCmp,
      SettingsApiCmp,
      SettingsPlantsCmp,
      PlantWidgetCmp,
      PlantWidgetEditCmp,
      ModalCmp,
      CalendarComponent
    ],
    providers: [
      UserService,
      NotifyService,
      PlantService,
      ModalService
    ],
    bootstrap: [
      App,
    ],
})
export class AppModule {}
