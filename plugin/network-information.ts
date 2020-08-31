//cordova-plugin-network-information
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError ,mergeMap } from 'rxjs/operators';

import { Cordova, ZoneObservable } from '../';

export enum Connection {
  UNKNOWN = 'unknown',
  ETHERNET = 'ethernet',
  WIFI = 'wifi',
  CELL_2G = '2g',
  CELL_3G = '3g',
  CELL_4G = '4g',
  NONE = 'none',
  CELL = 'celluar'
}

@Injectable()
export class NetworkInformationService {
  constructor(private zone: NgZone) {}

  online(): Observable<any> {
    return Cordova.deviceready.pipe(mergeMap(() =>
      ZoneObservable.create(this.zone, (observer: any) => {
        document.addEventListener('online', observer.next, false);
        return () => {
          document.removeEventListener('online', observer.next, false);
        };
      })
    ));
  }

  offline(): Observable<any> {
    return Cordova.deviceready.pipe(mergeMap(() =>
      ZoneObservable.create(this.zone, (observer: any) => {
        document.addEventListener('offline', observer.next, false);
        return () => {
          document.removeEventListener('offline', observer.next, false);
        };
      })
    ));
  }

  connectionType(): Observable<Connection> {
    return Cordova.deviceready.pipe(mergeMap(() =>
      ZoneObservable.of(this.zone, (<any>window).navigator.connection.type)
    ));
  }
}
