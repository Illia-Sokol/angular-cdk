import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import 'hammerjs';

import { JeremyCdkOverlayComponent } from './jeremy-sample/jeremy-sample.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from './file-preview/file-preview-overlay.component';
import { FilePreviewOverlayService } from './service/file-preview-overlay.service';
import { ConnectedComponent } from './popover-service/conntected.component';
import { ConnectedService } from './popover-service/connected.service';

import { ClPopoverComponent } from './popover/popover.component';
import { ClPopoverTriggerDirective } from './popover/popover-trigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilePreviewOverlayComponent,
    ConnectedComponent,
    JeremyCdkOverlayComponent,
    ClPopoverComponent,
    ClPopoverTriggerDirective
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
