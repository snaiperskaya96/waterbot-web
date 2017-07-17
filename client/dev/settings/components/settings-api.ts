import {
  Component,
  Inject
} from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
  selector: "settings-api-cmp",
  templateUrl: "settings/templates/settings-api.html",
  styleUrls: ["settings/styles/settings-api.css"],
  providers: [UserService]
})
export class SettingsApiCmp {
  tokens = [];
  canAddNewToken = true;

  constructor(private userService: UserService) {
    userService.getApiTokens().subscribe(tokens => this.tokens = tokens);
  }

  generateNewToken() {
    if (!this.canAddNewToken) return;
    this.userService.newApiToken().subscribe(token => {
      if (token) {
        this.tokens.push(token);
      }
    });
    this.canAddNewToken = false;
    setTimeout(() => this.canAddNewToken = true, 5000);
  }

  deleteToken(token) {
    this.userService.deleteApiToken(token).subscribe(result => {
      if (result) {
        this.tokens = this.tokens.filter(item => item !== token);
      }
    });
  }
}
