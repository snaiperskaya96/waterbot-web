import {
  Component,
  Inject
} from "@angular/core";

declare var $:any;
@Component({
  selector: "dashboard-cmp",
  templateUrl: "dashboard/templates/dashboard.html",
  styleUrls: ["dashboard/styles/dashboard.css"]
})
export class DashboardCmp {
  name: string = `yo, I"m your component :D`;

  ngOnInit(){
      $.getScript('../../assets/js/material-dashboard.js');
      $.getScript('../../assets/js/initMenu.js');
  }

}
