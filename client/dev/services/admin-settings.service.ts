import {
  Inject,
  Injectable
} from "@angular/core";

import {
  Observable
} from "rxjs/Observable";

import {
  Http,
  Headers
} from "@angular/http";

import "rxjs/add/operator/map";

@Injectable()
export class AdminSettingsService {
  static ENDPOINT: string = "/api/admin-settings";

  constructor(@Inject(Http) private http: Http) {}

  getAll(): Observable<AdminSettingsInterface[]>{
    return this.http
      .get(AdminSettingsService.ENDPOINT)
      .map(response => response.json());
  }

  getOne(id): Observable<AdminSettingsInterface> {
    return this.http
      .get(AdminSettingsService.ENDPOINT + '/' + id)
      .map(response => response.json());
  }

  save(data): Observable<AdminSettingsInterface> {
    return this.http
      .post(AdminSettingsService.ENDPOINT, data)
      .map(response => response.json());
  }

  updateById(id, data): Observable<any> {
      data._id = id;
      return this.http
        .post(AdminSettingsService.ENDPOINT + "/update", data)
        .map(response => response.json());
  }

  deleteById(id): Observable<any> {
    return this.http
      .get(AdminSettingsService.ENDPOINT + "/delete/" + id)
      .map(response => response.json());
  }
}

export interface AdminSettingsInterface {
  name: string;
  value: any;
  type: string;
}