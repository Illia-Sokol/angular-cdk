import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-fl-popover',
    templateUrl: './fl-popover.component.html',
    styleUrls: [`./fl-popover.component.css`],
    exportAs: 'flPopover'
})

export class FlPopoverComponent {
    @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
}
