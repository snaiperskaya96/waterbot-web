import {
  Component,
  OnInit
} from "@angular/core";

import {
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

import {
  UserService
} from "../services/user-service";
import { Router } from "@angular/router";
import { CookieService } from 'angular2-cookie/core';

declare const $:any;
@Component({
  selector: "login-cmp",
  templateUrl: "login/templates/index.html",
  styleUrls: ["login/styles/index.css"],
  providers: [CookieService]
})
export class LoginCmp implements OnInit {
  username:string;
  password:string;

  constructor(
    private userService: UserService, 
    private router: Router,
    private cookie: CookieService
    ) {
      userService
        .verify(cookie.get('wb_token'))
        .subscribe(isAuthenticated => {
          this.userService.authorized(isAuthenticated);
        });
  }

  ngOnInit() {
    $.getScript('../../../assets/js/login.js');

    this._getAll();
  }

  private _getAll(): void {
    /*this._todoService
        .getAll()
        .subscribe((todos) => {
          this.todos = todos;
        });
        */
  }

  add(message: string): void {
  }

  remove(id: string): void {
  }

  register() {
    alert('yay');
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(
      response => {
        if (response.token) {
          this.userService.authorized(response.token ? true : false);
          this.cookie.putObject('u', {a: true});
        }
      } 
    );
  }

  submit() {
    this.login();
  }
}
