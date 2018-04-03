import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { FlPopoverDirective } from './fl-popover.directive';
import { FlPopoverComponent } from './fl-popover.component';

@NgModule({
    imports: [
        OverlayModule,
        PortalModule
    ],
    exports: [
        FlPopoverComponent,
        FlPopoverDirective
    ],
    declarations: [
        FlPopoverComponent,
        FlPopoverDirective
    ]
})
export class FlPopoverModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: FlPopoverModule
        };
    }
}
