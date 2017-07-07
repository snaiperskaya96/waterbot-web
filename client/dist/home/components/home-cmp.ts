import {
  Component,
  Inject
} from "@angular/core";

@Component({
  selector: "home-cmp",
  templateUrl: "home/templates/home.html",
  styleUrls: ["home/styles/home.css"]
})
export class HomeCmp {
  name: string = `yo, I"m your home component :D`;
}
