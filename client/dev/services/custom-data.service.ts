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
export class CustomDataService {
  static ENDPOINT: string = "/api/custom-data";

  constructor(@Inject(Http) private http: Http) {}

  getAll(): Observable<CustomDataInterface[]>{
    return this.http
      .get(CustomDataService.ENDPOINT)
      .map(response => response.json());
  }

  getOne(id): Observable<CustomDataInterface> {
    return this.http
      .get(CustomDataService.ENDPOINT + '/' + id)
      .map(response => response.json());
  }

  save(data): Observable<CustomDataInterface> {
    return this.http
      .post(CustomDataService.ENDPOINT, data)
      .map(response => response.json());
  }

  updateById(id, data): Observable<any> {
      data._id = id;
      return this.http
        .post(CustomDataService.ENDPOINT + "/update", data)
        .map(response => response.json());
  }

  deleteById(id): Observable<any> {
    return this.http
      .get(CustomDataService.ENDPOINT + "/delete/" + id)
      .map(response => response.json());
  }
}

export interface CustomDataInterface {
  _id: any;
  name: string;
  value: string;
  formattedValue: string;
  botId: string;
  nickname: string;
  enabled: boolean;
  format: string;
}