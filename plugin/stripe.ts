// cordova-plugin-stripe
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError ,mergeMap } from 'rxjs/operators';

import { Cordova, ZoneObservable } from '../';

@Injectable()
export class StripeService {
    constructor(private zone: NgZone) {}

    createCardToken(creditCard: any): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).cordova.plugins.stripe.createCardToken(creditCard, (res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
}
