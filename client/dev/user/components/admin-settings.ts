import {
  Component,
  Inject
} from "@angular/core";
import { AdminSettingsService, AdminSettingsInterface } from "../../services/admin-settings.service";

@Component({
  selector: "admin-settings",
  templateUrl: "user/templates/admin-settings.html",
  styleUrls: ["user/styles/admin-settings.css"]
})
export class AdminSettingsCmp {
  settings: AdminSettingsInterface[];

  constructor(private adminSettingsService: AdminSettingsService) {
    this.adminSettingsService.getAll().subscribe(settings => {
      this.settings = settings;
    });
  }

  onChange(setting) {
    this.adminSettingsService.updateById(setting._id, setting).subscribe();
  }
}
