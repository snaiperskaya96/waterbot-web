import {
  Component,
  Inject,
  ViewChild
} from "@angular/core";
import { NgxDateRangePickerOptions, NgxDateRangePickerDates } from "ngx-daterangepicker";
import { PlantService } from "../../services/plant.service";
import { DomSanitizer } from '@angular/platform-browser';

const now = new Date();
declare const wdtEmojiBundle: any;
@Component({
  selector: "custom-schedule-modal-cmp",
  templateUrl: "plant/templates/custom-schedule-modal.html",
  styleUrls: ["plant/styles/custom-schedule-modal.css"]
})
export class CustomScheduleModalCmp {
  @ViewChild('modal') modal;
  @ViewChild('wateringDays') wateringDays: any;
  private event: any = {title: '', wateredFor: 0};
  private callBack: any;
  private deleteCallBack: any;
  private plants: any;
  private everyDay: boolean = false;
  private options: {} = {};
  private selectedPlant: any;
  private wateringTime: any;

  /**
   * The entire class could be just be massively refactored
   * by moving selectedPlant (=> plantId), wateringTime and 
   * wateringDays into this.event
   */

  constructor(private plantService: PlantService, private sanitizer: DomSanitizer) {
  }

  updatePlantsList() {
    this.plantService.getAll().subscribe(plants => {
      plants.forEach((element, index, array) => {
        const nickname = array[index].nickname ? wdtEmojiBundle.render(array[index].nickname) : '';
        array[index].HTMLNickname = nickname == '' ? false : this.sanitizer.bypassSecurityTrustHtml(nickname);
      });
      this.plants = plants;
    });
  }

  ngOnInit() {
    this.options = {
      theme: 'default',
      range: 'td',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      from: '',
      menu: [
            {alias: 'td', text: 'Today', operation: '0d'},
            {alias: 'tm', text: 'This Month', operation: '0m'},
            {alias: 'lm', text: 'Last Month', operation: '-1m'},
            {alias: 'tw', text: 'This Week', operation: '0w'},
            {alias: 'lw', text: 'Last Week', operation: '-1w'},
            {alias: 'ty', text: 'This Month', operation: '0y'},
            {alias: 'ly', text: 'Last Year', operation: '-1y'},
        ],
        dateFormat: 'd/M/y',
        outputFormat: 'DD/MM/YYYY',
        outputType: 'object',
        startOfWeek: 0,
        labels: ['From', 'To'],
    };
  }

  public edit(event, callBack, deleteCallBack) {
    this.callBack = callBack;
    this.deleteCallBack = deleteCallBack;
    const splittedFrom = event.calEvent.start.toJSON().split('T')[0].split('-');
    const splittedTo = event.calEvent.end ? event.calEvent.end.toJSON().split('T')[0].split('-') : null;
    let dates = {
      from: {
        year: splittedFrom[0],
        month: splittedFrom[1] - 1,
        day: splittedFrom[2]
      },
      to: {
        year: splittedTo ? splittedTo[0] : splittedFrom[0],
        month: splittedTo ? splittedTo[1] - 1 : splittedFrom[1] - 1,
        day: splittedTo ? splittedTo[2] : splittedFrom[2]
      }
    };

    this.wateringDays.selectDates(dates);
    this.event = event.calEvent;
    delete this.event.source;
    this.selectedPlant = this.event.plantId;
    this.wateringTime = this.event.wateringTime;
    this.modal.show();
  }

  public show(event, callBack) {
    this.updatePlantsList();
    delete this.event._id;

    this.callBack = callBack;
    this.options;

    const splittedDate = event.date.toJSON().split('T')[0].split('-');

    let dates = {
      from: {
          year: splittedDate[0],
          month: splittedDate[1] - 1,
          day: splittedDate[2]
      },
      to: {}
    };
    dates.to = dates.from;

    this.wateringDays.selectDates(dates);
    this.wateringTime = this.event.wateringTime;
    this.modal.show();
  }

  onSubmit() {
    this.wateringDays.dateFrom.setHours(12);
    this.wateringDays.dateTo.setHours(12);
    if (this.event._id) {
      this.event.start = this.wateringDays.dateFrom.toJSON();
      this.event.end = this.event.everyDay ? null : this.wateringDays.dateTo.toJSON(),
      this.event.plantId = this.selectedPlant;
      this.event.wateringTime = this.wateringTime;
      this.plantService
        .updateWatering(this.event)
        .subscribe(e => {
          this.callBack(this.event);
        });
        this.modal.hide();
    } else {
      const event = {
        plantId: this.selectedPlant,
        start: this.wateringDays.dateFrom.toJSON(),
        end: this.event.everyDay ? null : this.wateringDays.dateTo.toJSON(),
        title: this.event.title,
        wateredFor: this.event.wateredFor,
        wateringTime: this.wateringTime
      };
      this.plantService
        .createWatering(event)
        .subscribe(e => {
          this.callBack(event);
        });
      this.modal.hide();
    }
  }

  deleteEvent() {
    if (!confirm('Do you really want to delete this scheduled watering?')) return;
    this.deleteCallBack(this.event);
    this.modal.hide();
  }
}
