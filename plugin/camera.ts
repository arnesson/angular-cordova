// cordova-plugin-camera
import { Injectable, NgZone } from '@angular/core';

import { Observable , from} from 'rxjs';
import { map, catchError ,mergeMap } from 'rxjs/operators';

import { Cordova, ZoneObservable } from '../';

export enum CameraDestinationType {
    DATA_URL = 0,
    FILE_URI,
    NATIVE_URI
}

export enum CameraEncodingType {
    JPEG = 0,
    PNG
}

export enum CameraMediaType {
    PICTURE = 0,
    VIDEO,
    ALLMEDIA
}

export enum CameraPictureSourceType {
    PHOTOLIBRARY = 0,
    CAMERA,
    SAVEDPHOTOALBUM
}

export enum CameraPopoverArrowDirection {
    ARROW_UP = 1,
    ARROW_DOWN,
    ARROW_LEFT = 4,
    ARROW_RIGHT = 8,
    ARROW_ANY = 15
}

export enum CameraDirection {
    BACK = 0,
    FRONT
}

export interface CameraOptions {
    quality?: number,
    destinationType?: CameraDestinationType,
    sourceType?: CameraPictureSourceType,
    allowEdit?: boolean,
    encodingType?: CameraEncodingType,
    targetWidth?: number,
    targetHeight?: number,
    mediaType?: CameraMediaType,
    correctOrientation?: boolean,
    saveToPhotoAlbum?: boolean,
    popoverOptions?: CameraPopoverArrowDirection,
    cameraDirection?: CameraDirection
}

@Injectable()
export class CameraService {
    private cameraDefaults: CameraOptions = {
        quality: 50,
        destinationType: CameraDestinationType.FILE_URI,
        sourceType: CameraPictureSourceType.CAMERA,
        encodingType: CameraEncodingType.JPEG,
        mediaType: CameraMediaType.PICTURE,
        cameraDirection: CameraDirection.BACK
    }
    constructor(private zone: NgZone) {}

    getPicture(options?: CameraOptions): Observable<any> {
        const opts = Object.assign({}, this.cameraDefaults, options);
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.camera.getPicture((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error, opts);
        })));
    }
    cleanup(): Observable<any> {
        return Cordova.deviceready.pipe(mergeMap(() => ZoneObservable.create(this.zone, (observer: any) => {
            (<any>window).navigator.camera.cleanup((res: any) => {
                observer.next(res);
                observer.complete();
            }, observer.error);
        })));
    }
}
