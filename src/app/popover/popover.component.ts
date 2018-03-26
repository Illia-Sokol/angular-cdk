import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ClPopoverPanel } from './popover-interface';

@Component({
    selector: 'cl-popover',
    templateUrl: './popover.component.html',
    styles: [
        `
        :host {
            background: #ccc;
            padding: 32px;
            display: block;
        }
    `],
    exportAs: 'clPopover'
})

export class ClPopoverComponent implements ClPopoverPanel {
    @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
}
