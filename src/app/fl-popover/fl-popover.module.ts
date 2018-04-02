import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';

import { FlPopoverDirective } from './fl-popover.directive';
import { FlPopoverComponent } from './fl-popover.component';

@NgModule({
    imports: [
        OverlayModule
    ],
    exports: [
        FlPopoverComponent,
        FlPopoverDirective
    ],
    declarations: [
        FlPopoverComponent,
        FlPopoverDirective
    ],
    entryComponents: [
        FlPopoverComponent
    ]
})
export class FlPopoverModule {
public static forRoot(): ModuleWithProviders {
    return {
        ngModule: FlPopoverModule
    };
    }
}

export { PopoverInterface } from './fl-popover.interface';
export { FlPopoverDirective } from './fl-popover.directive';
export { FlPopoverComponent } from './fl-popover.component';
