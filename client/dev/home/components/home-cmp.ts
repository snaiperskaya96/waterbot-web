import {
  Component,
  Inject,
  ViewChild
} from "@angular/core";
import { PlantService } from "../../services/plant.service";
import { ScheduleModule } from 'primeng/primeng';

@Component({
  selector: "home-cmp",
  templateUrl: "home/templates/home.html",
  styleUrls: ["home/styles/home.css"],
  providers: [PlantService]
})
export class HomeCmp {
  private plants = [];
    events: any[];

    ngOnInit() {
        this.events = [
            {
                "title": "All Day Event",
                "start": "2016-01-01"
            },
            {
                "title": "Long Event",
                "start": "2016-01-07",
                "end": "2016-01-10"
            },
            {
                "title": "Repeating Event",
                "start": "2016-01-09T16:00:00"
            },
            {
                "title": "Repeating Event",
                "start": "2016-01-16T16:00:00"
            },
            {
                "title": "Conference",
                "start": "2016-01-11",
                "end": "2016-01-13"
            }
        ];
    }

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
}
