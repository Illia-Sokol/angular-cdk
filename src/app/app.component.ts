import { Component } from '@angular/core';
import { FilePreviewOverlayService } from './service/file-preview-overlay.service';
import { FilerPreviewOverlayRef } from './service/file-preview-overlay-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private filePreviewOverlayService: FilePreviewOverlayService) {}

  showFilePreview() {
    const dialogRef: FilerPreviewOverlayRef = this.filePreviewOverlayService.open();

    // setTimeout( () => {
    //   dialogRef.close();
    // }, 2000);
  }
}
