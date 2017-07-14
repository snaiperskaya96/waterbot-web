import {
  Component,
  Inject,
  ViewChild
} from "@angular/core";
import { CustomScheduleModalCmp } from "./custom-schedule-modal";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: "custom-schedule-cmp",
  templateUrl: "plant/templates/custom-schedule.html",
  styleUrls: ["plant/styles/custom-schedule.css"]
})
export class CustomScheduleCmp {
  modal: any;

  constructor(modalService: ModalService) {
    this.modal = modalService.get(ModalService.CUSTOM_SCHEDULE);
  }

  onDayClick($event) {
    this.modal.show($event, event => {this.onSubmit(event)});
  }

  onSubmit(event) {

  }
}
