// cordova-plugin-dialogs
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError ,mergeMap } from 'rxjs/operators';

import { Cordova, ZoneObservable } from '../';

@Injectable()
export class DialogsService {
    constructor(private zone: NgZone) {}

    alert(message: string, title?: string, buttonName?: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.notification.alert(message, (res: any) => {
                observer.next(res);
                observer.complete();
            }, title, buttonName);
        })));
    }
    confirm(message: string, title?: string, buttonLabels?: string[]): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.notification.confirm(message, (res: any) => {
                observer.next(res);
                observer.complete();
            }, title, buttonLabels);
        })));
    }
    prompt(message: string, title?: string, buttonLabels?: string[], defaultText?: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.notification.prompt(message, (res: any) => {
                observer.next(res);
                observer.complete();
            }, title, buttonLabels, defaultText);
        })));
    }
    beep(times: number): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).navigator.notification.beep(times))));
    }
}
