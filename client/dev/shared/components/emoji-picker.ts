import {
  Component,
  Inject
} from "@angular/core";

@Component({
  selector: "emoji-picker-cmp",
  templateUrl: "shared/templates/emoji-picker.html",
  styleUrls: ["shared/styles/emoji-picker.css"]
})
export class EmojiPickerCmp {
  name: string = `yo, I"m your component :D`;
}
