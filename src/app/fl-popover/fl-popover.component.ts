import { Component, TemplateRef, ViewChild } from '@angular/core';
import { PopoverInterface } from './fl-popover.interface';

@Component({
    selector: 'app-fl-popover',
    templateUrl: './fl-popover.component.html',
    styleUrls: [`./fl-popover.component.css`],
    exportAs: 'flPopover'
})

export class FlPopoverComponent implements PopoverInterface {
    @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
}
