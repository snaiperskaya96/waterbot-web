import {
  Component,
  Inject,
  ViewChild,
  Input
} from "@angular/core";
import { ModalCmp } from "../../shared/components/modal";

@Component({
  selector: "plant-widget-edit-cmp",
  templateUrl: "plant/templates/plant-widget-edit.html",
  styleUrls: ["plant/styles/plant-widget-edit.css"]
})
export class PlantWidgetEditCmp {
  private plant = {
    name: '',
    nickname: '',
    botId: ''
  };
  @ViewChild('modal') modal;
  private callBack;

  public show(plant, callBack) {
    this.plant = plant;
    this.callBack = callBack;
    this.modal.show();
  }

  private onSubmit() {
    this.callBack(this.plant);
    this.modal.hide();
  }

}
