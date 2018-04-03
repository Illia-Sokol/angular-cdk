import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import 'hammerjs';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from './file-preview/file-preview-overlay.component';

import { FlPopoverModule } from './fl-popover';

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
  entryComponents: [FilePreviewOverlayComponent]
})
export class AppModule {}
