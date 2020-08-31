// cordova-plugin-firebase
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError ,mergeMap } from 'rxjs/operators';

import { Cordova, ZoneObservable } from '../';

@Injectable()
export class FirebaseService {
    constructor(private zone: NgZone) {}

    getToken(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.getToken((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    onNotificationOpen(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.onNotificationOpen((res: any) => {
                observer.next(res);
            }, observer.error);
        })));
    }
    onTokenRefresh(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.onTokenRefresh((res: any) => {
                observer.next(res);
            }, observer.error);
        })));
    }
    grantPermission(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.grantPermission((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    setBadgeNumber(number: number): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.setBadgeNumber(number, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    getBadgeNumber(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.getBadgeNumber((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    subscribe(topic: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.subscribe(topic, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    unsubscribe(topic: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.unsubscribe(topic, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    logEvent(name: string, params: Object): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.logEvent(name, params, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    setUserId(id: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.setUserId(id, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    setUserProperty(name: string, value: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.setUserProperty(name, value, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    fetch(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.fetch((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    activateFetched(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.activateFetched((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    getValue(key: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.getValue(key, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    getByteArray(key: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.getByteArray(key, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    getInfo(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.getInfo((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    setConfigSettings(settings: Object): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.setConfigSettings(settings, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
    setDefaults(defaults: Object, namespace?: string): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).FirebasePlugin.setDefaults(defaults, namespace, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
}
