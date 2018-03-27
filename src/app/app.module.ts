import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import 'hammerjs';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from './file-preview/file-preview-overlay.component';
import { FilePreviewOverlayService } from './service/file-overview-overlay.service';
import { FilePreviewOverlayService } from './service/file-overview-overlay.service';

import { FlPopoverComponent } from './fl-popover/fl-popover.component';
import { FlPopoverDirective } from './fl-popover/fl-popover.directive';

import { FlPopoverComponent } from './fl-popover/fl-popover.component';
import { FlPopoverDirective } from './fl-popover/fl-popover.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilePreviewOverlayComponent,
    FlPopoverComponent,
    FlPopoverDirective
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    PortalModule
  ],
  providers: [FilePreviewOverlayService],
  bootstrap: [AppComponent],
  entryComponents: [FilePreviewOverlayComponent]
})
export class AppModule { }
