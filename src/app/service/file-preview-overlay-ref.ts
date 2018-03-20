import { OverlayRef } from '@angular/cdk/overlay';

export class FilerPreviewOverlayRef {
    constructor( private overlayRef: OverlayRef) {}

    close(): void {
        this.overlayRef.dispose();
    }
}
