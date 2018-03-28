import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from '../file-preview/file-preview-overlay.component';
import { FilePreviewOverlayConfig } from './file-preview-overlay.interface';
import { FilePreviewOverlayRef } from './file-preview-overlay-ref';

const DEFAULT_CONFIG: FilePreviewOverlayConfig = {
    panelClass: 'sokol',
    hasBackdrop: true,
    backdropClass: 'dark-backdrop'
};

@Injectable()
export class FilePreviewOverlayService {

    constructor(private overlay: Overlay) {
    }

    public open(config: FilePreviewOverlayConfig = {}) {
        // const overlayRef = this.overlay.create({
        //     width: '400px',
        //     height: '600px'
        // });

        const dialogConfig = { ...DEFAULT_CONFIG, ...config };
        const overlayRef = this.createOverlay(dialogConfig);
        const dialogRef = new FilePreviewOverlayRef(overlayRef);
        const filePreviewPortal = new ComponentPortal(FilePreviewOverlayComponent);
        overlayRef.attach(filePreviewPortal);
        overlayRef.backdropClick().subscribe( _ => dialogRef.close());

        return dialogRef;
    }

    // private createIjector(config: FilePreviewDialogConfig, dialog: FilePreviewOverlayRef): PortalInjector {

    // }

    private getOverlayConfig(config: FilePreviewOverlayConfig = {}): OverlayConfig {
        const positionStrategy = this.overlay.position()
        // .connectedTo(
        //     elementRef: ElementRef,
        //     originPos: OriginConnectionPosition,
        //     overlayPos: OverlayConnectionPosition
        // );
            .global()
            .centerHorizontally()
            .centerVertically();

        const overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            // scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy
        });

        return overlayConfig;
    }

    private createOverlay(config: FilePreviewOverlayConfig) {
        const overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    }
}
