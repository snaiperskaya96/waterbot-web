import {
  Component,
  Inject,
  ViewChild
} from "@angular/core";
import { ModalService } from "../../services/modal.service";

declare var $:any;
@Component({
  selector: "dashboard-cmp",
  templateUrl: "dashboard/templates/dashboard.html",
  styleUrls: ["dashboard/styles/dashboard.css"]
})
export class DashboardCmp {
  name: string = `yo, I"m your component :D`;
  @ViewChild('plantEditModal') plantEditModal;
  @ViewChild('customSchedulemodal') customSchedulemodal;
  @ViewChild('customDataModal') customDataModal;

  constructor(private modalService: ModalService) {
    
  }

  ngOnInit(){
      $.getScript('../../assets/js/material-dashboard.js');
      $.getScript('../../assets/js/initMenu.js');
      //register modals
      this.modalService.set(ModalService.PLANT_EDIT, this.plantEditModal);
      this.modalService.set(ModalService.CUSTOM_SCHEDULE, this.customSchedulemodal);
      this.modalService.set(ModalService.CUSTOM_DATA_EDIT, this.customDataModal);
  }

}
