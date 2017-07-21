import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule  } from "@angular/platform-browser";
import { App }   from "./app";
//import { loginRouting } from "./login/components/login-route";
import { LoginCmp } from "./login/components/login-cmp";
import { UserService } from "./services/user.service";
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
import { ScheduleModule } from "primeng/components/schedule/schedule";
import { InputSwitchModule } from 'primeng/primeng';
import { EmojiPickerCmp } from "./shared/components/emoji-picker";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlantRouting } from "./plant/components/plant-route";
import { CustomScheduleCmp } from "./plant/components/custom-schedule";
import { CustomScheduleModalCmp } from "./plant/components/custom-schedule-modal";
import { NgxDateRangePickerModule } from "ngx-daterangepicker";
import { MdSelectModule, MdSlideToggleModule, MdTableModule, MdInputModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomDataService } from "./services/custom-data.service";
import { CustomDataCmp } from "./custom-data/components/custom-data";
import { SettingsCustomDataCmp } from "./settings/components/settings-custom-data";
import { CdkTableModule } from '@angular/cdk';


@NgModule({
    imports: [
      CdkTableModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      HomeRouting,
      SettingsRouting,
      ScheduleModule,
      PlantRouting,
      NgbModule.forRoot(),
      NgxDateRangePickerModule,
      MdSelectModule,
      MdSlideToggleModule,
      MdTableModule,
      MdInputModule,
      MdToolbarModule,
      InputSwitchModule
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
      SettingsCustomDataCmp,
      PlantWidgetCmp,
      PlantWidgetEditCmp,
      ModalCmp,
      EmojiPickerCmp,
      CustomScheduleCmp,
      CustomScheduleModalCmp,
      CustomDataCmp
    ],
    providers: [
      UserService,
      NotifyService,
      PlantService,
      ModalService,
      CustomDataService
    ],
    bootstrap: [
      App,
    ],
})
export class AppModule {}
