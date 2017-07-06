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

@Component({
  selector: "login-cmp",
  templateUrl: "login/templates/index.html",
  styleUrls: ["login/styles/index.css"]
})
export class LoginCmp implements OnInit {
  username:string;
  password:string;

  constructor(
    private userService: UserService
    ) {
  }

  ngOnInit() {
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
      user => {console.log(user)}
    );
  }
}
