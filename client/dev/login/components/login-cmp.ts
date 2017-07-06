import {
  Component,
  OnInit
} from "@angular/core";

import {
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

@Component({
  selector: "login-cmp",
  templateUrl: "login/templates/index.html",
  styleUrls: ["login/styles/index.css"]
})
export class LoginCmp implements OnInit {
  constructor(
    //private _todoService: TodoService
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
}
