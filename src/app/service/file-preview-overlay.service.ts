import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from '../file-preview/file-preview-overlay.component';
import { FilePreviewOverlayConfig } from './file-preview-overlay.interface';
import { FilerPreviewOverlayRef } from './file-preview-overlay-ref';

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
        const dialogRef = new FilerPreviewOverlayRef(overlayRef);
        const filePreviewPortal = new ComponentPortal(FilePreviewOverlayComponent);
        overlayRef.attach(filePreviewPortal);

        return dialogRef;
    }

    private getOverlayConfig(config: FilePreviewOverlayConfig = {}): OverlayConfig {
        const positionStrategy = this.overlay.position()
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