// cordova-plugin-splashscreen
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError ,mergeMap } from 'rxjs/operators';

import { Cordova, ZoneObservable } from '../';

@Injectable()
export class SplashscreenService {
    constructor(private zone: NgZone) {}

    hide(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).navigator.splashscreen.hide())));
    }
    show(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).navigator.splashscreen.show())));
    }
}
