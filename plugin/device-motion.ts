// cordova-plugin-device-motion
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError ,mergeMap } from 'rxjs/operators';

import { Cordova, ZoneObservable } from '../';

@Injectable()
export class DeviceMotionService {
    constructor(private zone: NgZone) {}

    getCurrentAcceleration(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.accelerometer.getCurrentAcceleration((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    watchAcceleration(options?: Object): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            let watchID = (<any>window).navigator.accelerometer.watchAcceleration((res: any) => {
                observer.next(res);
            }, observer.error, options);
            return () => {
                (<any>window).navigator.accelerometer.clearWatch(watchID);
            };
        })));
    }
}
