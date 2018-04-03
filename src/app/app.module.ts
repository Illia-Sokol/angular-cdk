import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import 'hammerjs';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { A11yModule } from '@angular/cdk/a11y';
import { FilePreviewOverlayComponent } from './file-preview/file-preview-overlay.component';

import { FlPopoverModule } from './fl-popover';
import { CdkFocusComponent } from './ckd-focus';

@NgModule({
  declarations: [
    AppComponent,
    FilePreviewOverlayComponent,
    CdkFocusComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    PortalModule,
    A11yModule,
    FlPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FilePreviewOverlayComponent]
})
export class AppModule {}
