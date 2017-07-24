import {
  Component,
  Inject,
  ViewChild
} from "@angular/core";
import { CustomDataService, CustomDataInterface } from "../../services/custom-data.service";
import { ModalService } from "../../services/modal.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

interface HomeCustomDataInterface extends CustomDataInterface {
  sanitizedHtml: SafeHtml
}

declare let wdtEmojiBundle;
@Component({
  selector: "custom-data-cmp",
  templateUrl: "custom-data/templates/custom-data.html",
  styleUrls: ["custom-data/styles/custom-data.css"]
})
export class CustomDataCmp {
  customData: HomeCustomDataInterface[];
  modal: any;

  constructor(customDataService: CustomDataService, modalService: ModalService, sanitizer: DomSanitizer) {
    customDataService.getAll().subscribe(data => {
      this.customData = <HomeCustomDataInterface[]> data.filter(element => element.enabled);
      this.customData.forEach((element, index, array) => {
        array[index].sanitizedHtml = element.nickname ? sanitizer.bypassSecurityTrustHtml(wdtEmojiBundle.render(element.nickname)) : element.name;
      });
    });
    this.modal = modalService.get(ModalService.CUSTOM_DATA_EDIT);
  }
}