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
  private event: any = {title: '', wateredFor: 0};
  private callBack: any;
  private plants: any;
  private everyDay: boolean = false;
  
  options: {} = {};
  @ViewChild('wateringDays') wateringDays: any;

  constructor(plantService: PlantService, private sanitizer: DomSanitizer) {
    plantService.getAll().subscribe(plants => {
      this.plants = plants;
      this.plants.forEach((element, index, array) => {
        array[index].HTMLNickname = this.sanitizer.bypassSecurityTrustHtml(wdtEmojiBundle.render(array[index].nickname));
      });
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

  public show(event, callBack) {
    //this.event = event;
    this.callBack = callBack;
    this.options;

    const splittedDate = event.date.toJSON().split('-');

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
    this.modal.show();
  }

  onSubmit() {

  }
}
