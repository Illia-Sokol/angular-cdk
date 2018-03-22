/*
* Copyright (C) CompatibL Technologies LLC. All rights reserved.
* This code contains valuable trade secrets and may be used, copied,
* stored, or distributed only in accordance with a written license
* agreement and with the inclusion of this copyright notice.
*/

import { Injectable, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';
import {
  TemplatePortal
} from '@angular/cdk/portal';
import {
  Overlay,
  OverlayConfig
} from '@angular/cdk/overlay';

@Injectable()
export class ConnectedService {

  constructor(
    private overlay: Overlay,
  ) {}

  public open<T>(
    componentOrTemplateRef: TemplateRef<T>,
    viewRef: ViewContainerRef,
    element: ElementRef
  ) {
    const createPortal = new TemplatePortal(componentOrTemplateRef, viewRef);

    const strategy = this.overlay.position()
      .connectedTo(
       element,
        { originX: 'end', originY: 'center' },
        { overlayX: 'start', overlayY: 'center' }
      );

    const config = new OverlayConfig({
        hasBackdrop: true,
        backdropClass: 'cl-cdk-red',
        positionStrategy: strategy,
      });

    const overlayRef = this.overlay.create(config);

    overlayRef.attach(createPortal);
    overlayRef.backdropClick().subscribe( () => overlayRef.detach());
  }

}
