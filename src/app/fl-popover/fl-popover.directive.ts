import { Directive, HostListener, Input, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, ConnectedPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Directive({
    selector: '[appCflDirective]'
})

export class FlPopoverDirective {
    @Input('appCflDirective') popover: TemplateRef<any>;

    private isOpen = false;

    @HostListener('click')
    onClick() {
        // this.toggle();
        console.log(this.popover);
    }

    constructor (
        private element: ElementRef,
        private viewRef: ViewContainerRef,
        private overlay: Overlay
    ) {}

    private toggle(): void {
        return this.isOpen ? this.hide() : this.show();
    }

    private hide() {}

    private show() {
        const config: ConnectedPositionStrategy = this.overlay.position().connectedTo(
            this.element,
            { originX: 'start', originY: 'top'},
            { overlayX: 'start', overlayY: 'top'}
        );
        const _overlay = this.overlay.create({
            positionStrategy: config,
            hasBackdrop: true,
            backdropClass: 'cdk-fl-popover'
        });

        // const portal = new ComponentPortal(this.popover, this.viewRef);
        // _overlay.attach(portal);
    }

    // private getConfig(): OverlayConfig {

    // }
}
