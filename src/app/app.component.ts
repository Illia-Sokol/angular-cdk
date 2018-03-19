import { Component } from '@angular/core';
import { FilePreviewOverlayService } from './service/file-overview-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private filePreviewOverlayService: FilePreviewOverlayService) {}

  showFilePreview() {
    this.filePreviewOverlayService.open();
  }
}
