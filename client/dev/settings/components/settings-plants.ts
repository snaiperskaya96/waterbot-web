import {
  Component,
  Inject
} from "@angular/core";

@Component({
  selector: "settings-plants-cmp",
  templateUrl: "settings/templates/settings-plants.html",
  styleUrls: ["settings/styles/settings-plants.css"]
})
export class SettingsPlantsCmp {
  name: string = `yo, I"m your component :D`;
}
