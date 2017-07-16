import {
  Component,
  Inject,
  ViewChild,
  Input
} from "@angular/core";
import { ModalCmp } from "../../shared/components/modal";

declare let wdtEmojiBundle: any;
@Component({
  selector: "plant-widget-edit-cmp",
  templateUrl: "plant/templates/plant-widget-edit.html",
  styleUrls: ["plant/styles/plant-widget-edit.css"]
})
export class PlantWidgetEditCmp {
  private plant = {
    name: '',
    nickname: '',
    botId: '',
    wateredEvery: null,
    wateringTime: {hours: 0, minutes: 0},
    wateredFor: 0
  };
  wateringTime = {hour: 0, minute: 0};
  @ViewChild('modal') modal;
  @ViewChild('timePicker') timePicker;
  private callBack;

  public show(plant, callBack) {
    wdtEmojiBundle.init('#nickname');
    this.plant = plant;
    if (this.plant.wateringTime) {
      this.timePicker.model.hour = this.plant.wateringTime.hours;
      this.timePicker.model.minute = this.plant.wateringTime.minutes;
    }
    this.callBack = callBack;
    this.modal.show();
    console.log();
  }

  private onSubmit() {
    this.plant.wateringTime = this.plant.wateringTime || {hours: 0, minutes: 0};

    this.plant.wateringTime.hours = this.wateringTime.hour;
    this.plant.wateringTime.minutes = this.wateringTime.minute;

    this.callBack(this.plant);
    this.modal.hide();
  }
}
