import {
  Component,
  Inject,
  ViewChild
} from "@angular/core";
import { CustomScheduleModalCmp } from "./custom-schedule-modal";
import { ModalService } from "../../services/modal.service";
import { PlantService } from "../../services/plant.service";

@Component({
  selector: "custom-schedule-cmp",
  templateUrl: "plant/templates/custom-schedule.html",
  styleUrls: ["plant/styles/custom-schedule.css"]
})
export class CustomScheduleCmp {
  modal: any;
  events: any = [];
  @ViewChild('fullCalendar') fullCalendar;

  constructor(modalService: ModalService, private plantService: PlantService) {
    this.modal = modalService.get(ModalService.CUSTOM_SCHEDULE);
    plantService.getWaterings().subscribe(events => {
      this.events = events;
    });
  }

  onDayClick($event) {
    this.modal.show($event, event => {this.onSubmit(event)});
  }

  onEventClick($event) {
    this.modal.edit($event, event => {
        this.events.forEach((e, id, array) => {
          if (e._id.trim() != $event.calEvent._id.trim()) return;
          array[id] = event;
        });
    }, deleteEvent => {
        this.events.forEach((e, id, array) => {
          if (e._id.trim() != $event.calEvent._id.trim()) return;
          this.plantService.deleteWatering(e).subscribe();
          array.splice(id, 1);
        });
    });
  }

  onSubmit(event) {
    this.events.push(event);
  }
}
