import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import 'hammerjs';

import { OverlayModule } from '@angular/cdk/overlay';
import { FilePreviewOverlayComponent } from './file-preview/file-preview-overlay.component'
import { FilePreviewOverlayService } from './service/file-overview-overlay.service'

@NgModule({
  declarations: [
    AppComponent,
    FilePreviewOverlayComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  providers: [FilePreviewOverlayService],
  bootstrap: [AppComponent],
  entryComponents: [FilePreviewOverlayComponent]
})
export class AppModule { }
