import { Component, ViewChild, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';
import { FilePreviewOverlayService } from './service/file-preview-overlay.service';
import { FilePreviewOverlayRef } from './service/file-preview-overlay-ref';
import { ConnectedService } from './popover-service/connected.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('popoverContent') private popoverContent: TemplateRef<any>;
  @ViewChild('popoverLink') private popoverLink: ElementRef;
  public isOpen = false;

  constructor(
    private filePreviewOverlayService: FilePreviewOverlayService,
    private connectedService: ConnectedService,
    private vcr: ViewContainerRef
  ) {}

  showFilePreview() {
    const dialogRef: FilePreviewOverlayRef = this.filePreviewOverlayService.open();

    // setTimeout( () => {
    //   dialogRef.close();
    // }, 2000);
  }

  showFirst() {
    this.isOpen = !this.isOpen;
  }

  getApp() {
    this.connectedService.open(this.popoverContent, this.vcr, this.popoverLink);
  }
}
