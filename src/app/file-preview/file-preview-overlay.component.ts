import { Component } from '@angular/core';

@Component({
    selector: 'app-file-preview',
    templateUrl: 'file-preview-overlay.component.html',
    styles: [`
        :host {
            display: block;
            background-color: rgba(10, 10, 10, .3);
            border: 1px solid blue;
        }
    `]
})

export class FilePreviewOverlayComponent {}
