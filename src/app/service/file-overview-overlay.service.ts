import { Injectable } from "@angular/core";
import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from "../file-preview/file-preview-overlay.component";

@Injectable()
export class FilePreviewOverlayService {
    constructor(private overlay: Overlay) {}

    open() {
        const overlayRef = this.overlay.create();
        const filePreviewPortal = new ComponentPortal(FilePreviewOverlayComponent);
        overlayRef.attach(filePreviewPortal);
    }
}