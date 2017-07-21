import {
  Component,
  Inject
} from "@angular/core";

@Component({
  selector: "settings-cmp",
  templateUrl: "settings/templates/settings.html",
  styleUrls: ["settings/styles/settings.css"]
})
export class SettingsCmp {
  menu = [
    {name: 'API', class: 'active', id: 0},
    {name: 'Custom Data', class: '', id: 1},
    {name: 'General', class: '', id: 2}
  ];
  
  private components = ['settings-api-cmp', 'settings-custom-data-cmp', ''];

  activeComponent: String;

  constructor() {
    this.setActiveComponent(0);
  }

  setActiveComponent(component: Number) {
    this.menu.forEach((voice, id) => {
      if (voice.id == component) {
        this.menu[id].class = 'active';
        this.activeComponent = this.components[voice.id];
      } else {
        this.menu[id].class = '';
      }
    });
  }
}
