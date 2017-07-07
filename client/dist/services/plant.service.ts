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
export class PlantService {
  static ENDPOINT: string = "/api/plant/";

  constructor(@Inject(Http) private http: Http) {}

  getAll(): Observable<any>{
    return this.http.get(PlantService.ENDPOINT)
      .map(response => response.json());
  }

}
