// cordova-plugin-statusbar
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError ,mergeMap } from 'rxjs/operators';

import { Cordova, ZoneObservable } from '../';

@Injectable()
export class StatusbarService {
    constructor(private zone: NgZone) {}

    overlaysWebView(bool: boolean): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.overlaysWebView(bool))));
    }
    styleDefault(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.styleDefault())));
    }
    styleLightContent(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.styleLightContent())));
    }
    styleBlackTranslucent(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.styleBlackTranslucent())));
    }
    styleBlackOpaque(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.styleBlackOpaque())));
    }
    backgroundColorByName(color: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.backgroundColorByName(color))));
    }
    backgroundColorByHexString(colorHex: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.backgroundColorByHexString(colorHex))));
    }
    hide(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.hide())));
    }
    show(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.show())));
    }
    isVisible(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.of(this.zone, (<any>window).StatusBar.isVisible())));
    }
}
