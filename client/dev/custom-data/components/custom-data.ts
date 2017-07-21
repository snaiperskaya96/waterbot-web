import {
  Component,
  Inject
} from "@angular/core";
import { CustomDataService, CustomDataInterface } from "../../services/custom-data.service";

@Component({
  selector: "custom-data-cmp",
  templateUrl: "custom-data/templates/custom-data.html",
  styleUrls: ["custom-data/styles/custom-data.css"]
})
export class CustomDataCmp {
  customData: CustomDataInterface[];

  constructor(customDataService: CustomDataService) {
    customDataService.getAll().subscribe(data => {
      this.customData = data.filter(element => element.enabled);
    });
  }
}
