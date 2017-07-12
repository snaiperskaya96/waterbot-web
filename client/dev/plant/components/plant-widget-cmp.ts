import {
  Component,
  Inject,
  Input,
  ViewChild
} from "@angular/core";
import { PlantWidgetEditCmp } from "./plant-widget-edit";
import { ModalService } from "../../services/modal.service";
import { PlantService } from "../../services/plant.service";
import { DomSanitizer } from '@angular/platform-browser';

declare let wdtEmojiBundle: any;
@Component({
  selector: "plant-widget-cmp",
  templateUrl: "plant/templates/plant-widget.html",
  styleUrls: ["plant/styles/plant-widget.css"],
  providers: [PlantService]
})
export class PlantWidgetCmp {
  @Input() colWidth: string = '3';
  @Input() plant;
  @ViewChild('nickname') nickname;
  
  constructor(
    private modalService: ModalService,
    private plantService: PlantService,
    private sanitizer: DomSanitizer
  ) {
  }

  private show() {
    this.modalService.get(ModalService.PLANT_EDIT).show({ ...this.plant }, (plant) => {this.onPlantSave(plant)});
  }

  onPlantSave(plant) {
    this.plant = plant;
    this.plantService.save(plant).subscribe();
    this.ngOnInit();
  }

  ngOnInit() {
    if (this.plant.nickname) {
      this.plant.HTMLNickname = this.sanitizer.bypassSecurityTrustHtml(wdtEmojiBundle.render(this.plant.nickname));
    }
  }
}
