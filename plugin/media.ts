// cordova-plugin-media
import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError ,mergeMap } from 'rxjs/operators';

import { Cordova, ZoneObservable } from '../';

export enum MediaStatus {
  MEDIA_NONE = 0,
  MEDIA_STARTING,
  MEDIA_RUNNING,
  MEDIA_PAUSED,
  MEDIA_STOPPED
}

export enum MEDIA_ERROR {
  MEDIA_ERR_ABORTED = 1,
  MEDIA_ERR_NETWORK,
  MEDIA_ERR_DECODE,
  MEDIA_ERR_NONE_SUPPORTED
}

export class MediaError {
  public code: MEDIA_ERROR;
  public message: string;
}

export class MediaService {
  constructor(private zone: NgZone) {}

  createMedia(
    src: string,
    mediaSuccess?: (succuss: any) => void,
    mediaError?: (error: MediaError) => void,
    mediaStatus?: (status: MediaStatus) => void
  ): Observable<any> {
    return Cordova.deviceready.pipe(mergeMap(() =>
      ZoneObservable.of(
        this.zone,
        new (<any>window).Media(src, mediaSuccess, mediaError, mediaStatus)
      )
    ));
  }
}
