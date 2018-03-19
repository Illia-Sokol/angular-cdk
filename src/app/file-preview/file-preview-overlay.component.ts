import { Component } from '@angular/core';

@Component({
    selector: 'file-preview',
    templateUrl: 'file-preview-overlay.component.html',
    styles: [`
        :host {
            background: lightblue;
            border: 1px solid blue;
        }
    `]
})

export class FilePreviewOverlayComponent{}