import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import 'hammerjs';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from './file-preview/file-preview-overlay.component';

// import { FlPopoverComponent } from './fl-popover/fl-popover.component';
// import { FlPopoverDirective } from './fl-popover/fl-popover.directive';
import { FlPopoverModule, FlPopoverComponent, FlPopoverDirective } from './fl-popover';

@NgModule({
  declarations: [
    AppComponent,
    FilePreviewOverlayComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    PortalModule,
    FlPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FilePreviewOverlayComponent,  FlPopoverComponent]
})
export class AppModule { }
