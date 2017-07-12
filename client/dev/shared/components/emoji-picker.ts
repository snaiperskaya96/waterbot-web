import {
  Component,
  Inject
} from "@angular/core";

declare let wdtEmojiBundle: any;
declare let $: any;
@Component({
  selector: "emoji-picker-cmp",
  templateUrl: "shared/templates/emoji-picker.html",
  styleUrls: ["shared/styles/emoji-picker.css"]
})
export class EmojiPickerCmp {
  ngAfterViewInit() {
    wdtEmojiBundle.init('#nickname');           
  }
}
