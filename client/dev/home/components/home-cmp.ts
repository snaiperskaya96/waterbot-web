import {
  Component,
  Inject,
  ViewChild,
  OnDestroy
} from "@angular/core";
import { PlantService } from "../../services/plant.service";
import { ScheduleModule } from 'primeng/primeng';
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: "home-cmp",
  templateUrl: "home/templates/home.html",
  styleUrls: ["home/styles/home.css"],
  providers: [PlantService]
})
export class HomeCmp implements OnDestroy {
  private plants = [];
  private interval: any;

  constructor(
    private plantService: PlantService, 
    private router: Router,
    private userService: UserService
  ) {
    this.refresh();
    this.interval = setInterval(() => {this.refresh()}, 10000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private refresh() {
    this.plantService.getAll().subscribe(result => {
      result.forEach(element => {
        let found: boolean = false;
        this.plants.forEach((plant, index) => {
          if (plant._id == element._id) {
            found = true;
            this.plants[index].humidity = element.humidity;
          }
        });
        if (!found) this.plants.push(element);
      });
      
    }, error => {
      this.userService.logout();
      this.router.navigate(['/']);
    });
  }
}
