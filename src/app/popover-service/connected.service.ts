/*
* Copyright (C) CompatibL Technologies LLC. All rights reserved.
* This code contains valuable trade secrets and may be used, copied,
* stored, or distributed only in accordance with a written license
* agreement and with the inclusion of this copyright notice.
*/

import {
  Injectable,
  TemplateRef,
  ViewContainerRef,
  ElementRef,
  NgZone
} from '@angular/core';
import {
  TemplatePortal
} from '@angular/cdk/portal';
import {
  Overlay,
  OverlayConfig,
  ConnectedPositionStrategy,
  OriginConnectionPosition,
  OverlayConnectionPosition,
  OverlayRef
} from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { ViewportRuler } from '@angular/cdk/scrolling';

const originPos: OriginConnectionPosition = { originX: 'start', originY: 'bottom' };
const overlayPos: OverlayConnectionPosition = { overlayX: 'start', overlayY: 'top' };

@Injectable()
export class ConnectedService {

  constructor(
    private overlay: Overlay,
    private platform: Platform,
    private viewRule: ViewportRuler
  ) {
  }

  public open<T>(
    componentOrTemplateRef: TemplateRef<T>,
    viewRef: ViewContainerRef,
    element: ElementRef
  ) {
    const createPortal = new TemplatePortal(componentOrTemplateRef, viewRef);

    const strategy = this.overlay.position()
      .connectedTo(
        element,
        // originPos,
        // overlayPos
        { originX: 'end', originY: 'center' },
        { overlayX: 'start', overlayY: 'center' }
    );

    const position = new ConnectedPositionStrategy(
      originPos,
      overlayPos,
      element,
      this.viewRule,
      'some'
    );

    const config = new OverlayConfig({
      panelClass: 'cl-sokol',
      // hasBackdrop: true,
      // backdropClass: 'cl-cdk-red',
      positionStrategy: strategy
    });

    const overlayRef: OverlayRef = this.overlay.create(config);

    overlayRef.attach(createPortal);
    overlayRef.backdropClick().subscribe( () => {
      console.log('heello');
      overlayRef.detach();
    });
    // overlayRef.updatePosition();
  }

}
