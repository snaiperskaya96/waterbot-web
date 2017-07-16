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
  static ENDPOINT: string = "/api/plant";

  constructor(@Inject(Http) private http: Http) {}

  getAll(): Observable<any>{
    return this.http
      .get(PlantService.ENDPOINT)
      .map(response => response.json());
  }

  save(plant): Observable<any> {
    return this.http
      .post(PlantService.ENDPOINT + "/save", plant)
      .map(response => response.json());
  }

  getWaterings(): Observable<any> {
    return this.http
      .get(PlantService.ENDPOINT + '/watering')
      .map(response => response.json());
  }

  createWatering(watering): Observable<any> {
    return this.http
      .post(PlantService.ENDPOINT + '/watering', watering)
      .map(response => response.json());
  }

  updateWatering(watering): Observable<any> {
    return this.http
      .post(PlantService.ENDPOINT + '/watering/update', watering)
      .map(response => response.json());
  }

  deleteWatering(watering): Observable<any> {
    return this.http
      .delete(PlantService.ENDPOINT + '/watering/' + watering._id)
      .map(response => response.json());
  }

}
