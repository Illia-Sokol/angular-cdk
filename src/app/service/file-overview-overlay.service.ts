import { Injectable } from "@angular/core";
import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable()
export class FilePreviewOverlayService {
    constructor(private overlay: Overlay) {}

    open() {
        const overlayRef = this.overlay.create();
        const filePreviewPortal = new ComponentPortal(FilePreviewOverlayService);
        overlayRef.attach(filePreviewPortal);
    }
}