import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import 'hammerjs';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from './file-preview/file-preview-overlay.component';
import { FilePreviewOverlayService } from './service/file-preview-overlay.service';
import { ConnectedComponent } from './connected-overlay/conntected.component';
import { ConnectedService } from './connected-overlay/connected.service';

@NgModule({
  declarations: [
    AppComponent,
    FilePreviewOverlayComponent,
    ConnectedComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    PortalModule
  ],
  providers: [FilePreviewOverlayService, ConnectedService],
  bootstrap: [AppComponent],
  entryComponents: [FilePreviewOverlayComponent]
})
export class AppModule { }
