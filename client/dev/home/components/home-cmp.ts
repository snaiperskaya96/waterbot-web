import {
  Component,
  Inject
} from "@angular/core";
import { PlantService } from "../../services/plant.service";

@Component({
  selector: "home-cmp",
  templateUrl: "home/templates/home.html",
  styleUrls: ["home/styles/home.css"],
  providers: [PlantService]
})
export class HomeCmp {
  private plants = [];

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
