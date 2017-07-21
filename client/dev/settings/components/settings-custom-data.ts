import {
  Component,
  Inject,
  ViewChild
} from "@angular/core";
import { CustomDataService, CustomDataInterface } from "../../services/custom-data.service";
import { DataSource } from "@angular/cdk";
import { Observable } from "rxjs/Rx";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { MdSort } from "@angular/material";

@Component({
  selector: "settings-custom-data-cmp",
  templateUrl: "settings/templates/settings-custom-data.html",
  styleUrls: ["settings/styles/settings-custom-data.css"]
})
export class SettingsCustomDataCmp {
  customData: CustomDataInterface[];
  displayedColumns = ['name', 'botId', 'value', 'enabled', 'edit'];
  dataSource: TableDataSource | null;

  ngOnInit() {
    this.dataSource = new TableDataSource(this.customDataService);
  }

  constructor(private customDataService: CustomDataService) {
  }

  onChange($event) {
    this.customDataService.updateById($event.source.id, {enabled: $event.source.checked}).subscribe();
  }
}

export class TableDataSource extends DataSource<any> {
  constructor(private customDataService: CustomDataService) {
    super();
  }

  connect(): Observable<CustomDataInterface[]> {
    return this.customDataService.getAll();
  }

  disconnect() {}
}
