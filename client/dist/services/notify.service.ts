import { Injectable } from '@angular/core';

@Injectable()
export class NotifyService {
    private subscriptions : Array<void> = [];

    subscribe(callback): void {
        this.subscriptions.push(callback);
    }
}
