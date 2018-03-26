// https://github.com/material-extended/mde

import { Directive, Input, ViewContainerRef, HostListener, ElementRef } from '@angular/core';
import {
    OverlayRef,
    Overlay,
    OverlayConfig,
    ConnectedPositionStrategy
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  HorizontalConnectionPos,
  VerticalConnectionPos
} from '@angular/cdk/overlay';
import {
    ClPopoverPanel
} from './popover-interface';

@Directive({
    selector: '[ClPopoverTriggerFor]',
    exportAs: 'clPopoverTrigger'
})

export class ClPopoverTriggerDirective {
    private _portal: TemplatePortal<any>;
    private _popoverOpen: boolean = false;
    private _overlayRef: OverlayRef | null;

    @Input('ClPopoverTriggerFor') popover: TemplateRef<any>;

    constructor(
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef,
        public _elementRef: ElementRef
    ) {
        // this.popover.templateRef;
    }

    @HostListener('click')
    onClick() {
        // if (this.popover.)
        // this.togglePopover();
        this.openPopover();
    }

    // togglePopover(): void {
    //     return this._popoverOpen ? this.closePopover() : this.openPopover();
    // }

    openPopover(): void {
        if (!this._popoverOpen) {
            this._createOverlay().attach(this._portal);
        }
    }

    // closePopover(): void {

    // }

    private _createOverlay(): OverlayRef {
        if (!this._overlayRef) {
            this._portal = new TemplatePortal(this.popover.templateRef, this._viewContainerRef);
            const config = this._getOverlayConfig();
            this._overlayRef = this._overlay.create(config);
        }
        return this._overlayRef;
    }

    private _getOverlayConfig(): OverlayConfig {
        const overlayState = new OverlayConfig();
        overlayState.positionStrategy = this._getPosition();
        overlayState.hasBackdrop = true;
        overlayState.backdropClass = 'cl-lightblue';
        overlayState.scrollStrategy = this._overlay.scrollStrategies.reposition();
        return overlayState;
    }

    private _getPosition(): ConnectedPositionStrategy {
        return this._overlay.position().connectedTo(
            this._elementRef,
            { originX: 'start', originY: 'bottom' },
            { overlayX: 'start', overlayY: 'top' }
        );
    }

    private _subscribeToPositions(position: ConnectedPositionStrategy): void {
        this.
        let positionY: ClPopoverPanel = change.
    }
}
