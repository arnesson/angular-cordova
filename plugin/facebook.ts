// cordova-plugin-facebook4
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError ,mergeMap } from 'rxjs/operators';

import { Cordova, ZoneObservable } from '../';

@Injectable()
export class FacebookService {
    constructor(private zone: NgZone) {}

    login(permissions?: Array<any>): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).facebookConnectPlugin.login(permissions, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    showDialog(options?: Object): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).facebookConnectPlugin.showDialog(options, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    api(path: string, permissions?: Array<any>): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).facebookConnectPlugin.api(path, permissions, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    getAccessToken(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).facebookConnectPlugin.getAccessToken((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    getLoginStatus(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).facebookConnectPlugin.getLoginStatus((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    logout(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).facebookConnectPlugin.logout((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    logEvent(name: string, params?: Object, value?: number): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).facebookConnectPlugin.logEvent(name, params, value, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    logPurchase(value: number, currency: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).facebookConnectPlugin.logPurchase(value, currency, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    appInvite(options?: Object): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).facebookConnectPlugin.appInvite(options, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    getDeferredApplink(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).facebookConnectPlugin.getDeferredApplink((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    activateApp(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).facebookConnectPlugin.activateApp((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
}
