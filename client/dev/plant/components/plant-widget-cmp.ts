import {
  Component,
  Inject,
  Input
} from "@angular/core";

@Component({
  selector: "plant-widget-cmp",
  templateUrl: "plant/templates/plant-widget.html",
  styleUrls: ["plant/styles/plant-widget.css"]
})
export class PlantWidgetCmp {
  @Input() colWidth: string = '3';
  @Input() plant;
}
