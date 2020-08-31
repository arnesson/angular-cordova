// cordova-plugin-vibration
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError ,mergeMap } from 'rxjs/operators';

import { Cordova, ZoneObservable } from '../';

@Injectable()
export class VibrationService {
    constructor(private zone: NgZone) {}

    vibrate(time_or_pattern: number | number[]): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).navigator.vibrate(time_or_pattern))));
    }
}
