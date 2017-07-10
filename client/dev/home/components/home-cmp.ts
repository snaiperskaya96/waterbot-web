import {
  Component,
  Inject,
  ViewChild
} from "@angular/core";
import { PlantService } from "../../services/plant.service";
import { CalendarComponent } from "ap-angular2-fullcalendar/src/calendar/calendar";

@Component({
  selector: "home-cmp",
  templateUrl: "home/templates/home.html",
  styleUrls: ["home/styles/home.css"],
  providers: [PlantService]
})
export class HomeCmp {
  private plants = [];
  calendarOptions:Object = {
        height: 'parent',
        fixedWeekCount : false,
        defaultDate: '2016-09-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'All Day Event',
            start: '2016-09-01'
          },
          {
            title: 'Long Event',
            start: '2016-09-07',
            end: '2016-09-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2016-09-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2016-09-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2016-09-11',
            end: '2016-09-13'
          },
          {
            title: 'Meeting',
            start: '2016-09-12T10:30:00',
            end: '2016-09-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2016-09-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2016-09-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2016-09-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2016-09-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2016-09-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2016-09-28'
          }
        ]
      };

  constructor(@Inject(PlantService) private plantService: PlantService) {
    this.refresh(this);
  }

  private refresh(self) {
    self.plantService.getAll().subscribe(result => {
      result.forEach(element => {
        let found: boolean = false;
        self.plants.forEach((plant, index) => {
          if (plant._id == element._id) {
            found = true;
            self.plants[index].humidity = element.humidity;
          }
        });
        if (!found) self.plants.push(element);
      });
      setTimeout(() => {self.refresh(self)}, 10000);
    });
  }

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
 
  changeCalendarView(view) {
    this.myCalendar.fullCalendar('changeView', view);
  }

}
