import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';

declare var $:any;
@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'dashboard/components/sidebar/sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        $.getScript('../../../assets/js/sidebar-moving-tab.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
