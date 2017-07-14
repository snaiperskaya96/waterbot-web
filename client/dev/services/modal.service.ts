import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    private modals = {};
    static PLANT_EDIT = 'plant-edit';
    static CUSTOM_SCHEDULE = 'custom-schedule';

    set(name, value) {
        this.modals[name] = value;
    }

    get(name) {
        return this.modals[name];
    }
}
