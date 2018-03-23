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
  NgZone,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector
} from '@angular/core';
import {
  TemplatePortal
} from '@angular/cdk/portal';
import {
  Overlay,
  OverlayConfig,
  ConnectedPositionStrategy,
  PositionStrategy,
  OriginConnectionPosition,
  OverlayConnectionPosition,
  OverlayRef,
  ScrollStrategyOptions,
  ScrollDispatcher,
  OverlayContainer,
  OverlayPositionBuilder,
  OverlayKeyboardDispatcher,
  ScrollStrategy
} from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import {
  ViewportRuler,
} from '@angular/cdk/scrolling';
import {LayoutModule} from '@angular/cdk/layout';

const originPos: OriginConnectionPosition = { originX: 'start', originY: 'bottom' };
const overlayPos: OverlayConnectionPosition = { overlayX: 'start', overlayY: 'top' };

@Injectable()
export class ConnectedService {

  constructor(
    private platform: Platform,
    private viewRule: ViewportRuler,
    private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone,
    private overlayContainer: OverlayContainer,
    private componentFactoryResolver: ComponentFactoryResolver,
    private overlayKeyboardDispatcher: OverlayKeyboardDispatcher,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private overlayPositionBuilder: OverlayPositionBuilder
  ) {
  }

  public open<T>(
    componentOrTemplateRef: TemplateRef<T>,
    viewRef: ViewContainerRef,
    element: ElementRef,
  ) {
    const createPortal = new TemplatePortal(componentOrTemplateRef, viewRef);

    const position = new ConnectedPositionStrategy(
      originPos,
      overlayPos,
      element,
      this.viewRule,
      document.body
    );

    const scrollStrategyOptions = new ScrollStrategyOptions(
      this.scrollDispatcher,
      this.viewRule,
      this.ngZone,
      document.body
    );

    const overlay = new Overlay(
      scrollStrategyOptions,
      this.overlayContainer,
      this.componentFactoryResolver,
      this.overlayPositionBuilder,
      this.overlayKeyboardDispatcher,
      this.applicationRef,
      this.injector,
      this.ngZone,
      document
    );

    const overlayPositionBuilder: OverlayPositionBuilder = overlay.position();
    const connectedPositionStrategy: ConnectedPositionStrategy = overlayPositionBuilder.connectedTo(
      element,
      originPos,
      overlayPos
    );

    const config = new OverlayConfig({
      panelClass: 'cl-sokol-popover',
      // hasBackdrop: true,
      backdropClass: 'cl-sokol-backdrop',
      positionStrategy: connectedPositionStrategy
    });
    // connectedPositionStrategy.withOffsetX(20);
    connectedPositionStrategy.recalculateLastPosition();

    const overlayRef: OverlayRef = overlay.create(config);
    overlayRef.attach(createPortal);
    overlayRef.backdropClick().subscribe( () => {
      // connectedPositionStrategy.recalculateLastPosition();
      overlayRef.detach();
      overlayRef.dispose();
    });
  }
}
