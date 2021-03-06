import {
  Component,
  Inject
} from "@angular/core";

@Component({
  selector: "modal-cmp",
  templateUrl: "shared/templates/modal.html",
  styleUrls: ["shared/styles/modal.css"]
})
export class ModalCmp {

  public visible = false;
  public visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
