import { Component, ViewChild, ViewChildren, QueryList, ElementRef, ViewContainerRef } from '@angular/core';

import { OverlayModule, Overlay, CdkOverlayOrigin, OverlayConfig } from '@angular/cdk/overlay';
import { CdkPortal, Portal, TemplatePortal, ComponentPortal, DomPortalHost } from '@angular/cdk/portal';

@Component({
    selector: 'app-connected',
    templateUrl: './connected.component.html',
    styles: [`
        .my-overlay {
            border: 1px solid red;
        }
    `]
})

export class ConnectedComponent {
    @ViewChild(CdkPortal) _cdkPortal: Portal<any>;
    selectedPortal: Portal<any>;

    @ViewChild(CdkOverlayOrigin) _overlayOrigin: CdkOverlayOrigin;
    private domPortalHost: DomPortalHost;

    constructor(
        private overlay: Overlay,
        private viewContainerRef: ViewContainerRef
    ) {}

    public showPortal() {
        this.selectedPortal = this._cdkPortal;
        console.log(this._cdkPortal);
    }

    public showOverlay() {
        console.log(this.viewContainerRef);
        const strategy = this.overlay.position()
            .connectedTo(
                this._overlayOrigin.elementRef,
                { originX: 'end', originY: 'bottom' },
                { overlayX: 'start', overlayY: 'bottom' }
            );

        const config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'cl-cdk-backdrop',
            positionStrategy: strategy
        });
        const overlayRef = this.overlay.create(config);

        // this.domPortalHost = new DomPortalHost({ this.viewContainerRef });

        overlayRef.attach(this._cdkPortal);
        overlayRef.backdropClick().subscribe( () => overlayRef.detach() );
        console.log('done');
    }
}
