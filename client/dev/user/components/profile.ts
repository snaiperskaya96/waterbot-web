import {
  Component,
  Inject
} from "@angular/core";
import { UserService, UserInterface, UserProfileInterface } from "../../services/user.service";

@Component({
  selector: "profile",
  templateUrl: "user/templates/profile.html",
  styleUrls: ["user/styles/profile.css"]
})
export class ProfileCmp {
  user: UserInterface = <UserInterface>{};
  profile: UserProfileInterface = <UserProfileInterface>{};
  repeatPassword: string;

  constructor(private userService: UserService) {
    this.userService.get().subscribe(user => {
      this.user = user;
      if (user.profile) this.profile = user.profile;
    });
  }

  onSave() {
    let u = this.user;
    u.profile = this.profile;
    if (u.password && u.password != this.repeatPassword) return alert('Passwords do not match.');
    this.userService.update(u).subscribe(user => {
      alert('Profile updated.');
    }, (error) => {
      alert('Error while trying to update the profile. ' + JSON.stringify(error));
    });
  }
}
