import { Directive, HostListener, Input, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, ConnectedPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { PopoverInterface } from './fl-popover.interface';

@Directive({
    selector: '[appCflDirective]'
})

export class FlPopoverDirective  {
    @Input() popover: PopoverInterface;

    private isOpen = false;
    private portal: TemplatePortal<any>;

    @HostListener('click')
    onClick() {
        this.toggle();
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

        this.portal = new TemplatePortal(this.popover.templateRef, this.viewRef);
        _overlay.attach(this.portal);

    }
}
