import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    private modals = {};
    static PLANT_EDIT = 'plant-edit';
    static CUSTOM_SCHEDULE = 'custom-schedule';
    static CUSTOM_DATA_EDIT = 'custom-data-edit';
    
    set(name, value) {
        this.modals[name] = value;
    }

    get(name) {
        return this.modals[name];
    }
}
