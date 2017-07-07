import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'footer-cmp',
    templateUrl: 'dashboard/components/footer/footer.component.html',
})

export class FooterComponent{
    test : Date = new Date();
}
