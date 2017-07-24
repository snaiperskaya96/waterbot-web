import {
  Component,
  Inject,
  ViewChild
} from "@angular/core";
import { CustomDataService, CustomDataInterface } from "../../services/custom-data.service";

@Component({
  selector: "custom-data-modal-cmp",
  templateUrl: "custom-data/templates/custom-data-modal.html",
  styleUrls: ["custom-data/styles/custom-data-modal.css"]
})
export class CustomDataModalCmp {
  data: CustomDataInterface = <CustomDataInterface>{};
  callBack: any;
  @ViewChild('modal') modal;

  constructor(private customDataService: CustomDataService) {
  }

  edit(id, callBack) {
    this.callBack = callBack;
    this.customDataService.getOne(id).subscribe((data) => {
      this.data = data;
      this.modal.show();
    });
  }

  onSubmit() {
    this.customDataService.updateById(this.data._id, this.data).subscribe(() => {
      this.modal.hide();
      this.callBack();
    });
  }

  deleteData() {
    this.customDataService.deleteById(this.data._id).subscribe(() => {
      this.modal.hide();
      this.callBack();
    });
  }
}
