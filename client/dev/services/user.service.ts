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
import { CookieService } from "angular2-cookie/core";

@Injectable()
export class UserService {
  static ENDPOINT: string = "/api/user/";
  private authenticationCallbacks = [];

  constructor(@Inject(Http) private _http: Http, private cookie: CookieService) {}

  login(username: string, password: string): Observable<any> {
    return this._http
               .post(UserService.ENDPOINT + "authenticate", {
                 username: username,
                 password: password
               })
               .map((r) => r.json());
  }

  getApiTokens(): Observable<any> {
    return this._http
                .get(UserService.ENDPOINT + "tokens")
                .map(r => r.json());
  }

  newApiToken(): Observable<any> {
    return this._http
                .post(UserService.ENDPOINT + "tokens", {})
                .map(r => r.json());
  }

  deleteApiToken(token): Observable<any> {
    return this._http
                .post(UserService.ENDPOINT + "tokens/delete", {token: token})
                .map(r => r.json());
  }

  logout(): void {
    this.cookie.remove('wb_token');
    this.authorized(false);
  }

  verify(token): Observable<any> {
    return this._http
                .get(UserService.ENDPOINT + "verify")
                .map(r => r.json());
  }

  observeAuthentication(callback: any): void {
    this.authenticationCallbacks.push(callback);
  }

  authorized(isAuthorized: boolean) :void {
    this.authenticationCallbacks.forEach(callback => {
      callback(isAuthorized);
    });
  }

  get() : Observable<UserInterface> {
    return this._http
      .get(UserService.ENDPOINT)
      .map(r => r.json());
  }

  update(user: UserInterface) : Observable<UserInterface> {
    return this._http
      .post(UserService.ENDPOINT + "update", user)
      .map(r => r.json());
  }
}

export interface UserProfileInterface {
      firstName: string;
      lastName: string;
      alertEmail: string;
}

export interface UserInterface {
    username: string;
    email: string;
    password: string;
    profile: UserProfileInterface;
}