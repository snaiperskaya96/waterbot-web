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
export class UserService {
  static ENDPOINT: string = "/api/user/";

  constructor(@Inject(Http) private _http: Http) {}

  login(username: string, password: string): Observable<any> {
    return this._http
               .post(UserService.ENDPOINT + "authenticate", {
                 username: username,
                 password: password
               })
               .map((r) => r.json());
  }
}
