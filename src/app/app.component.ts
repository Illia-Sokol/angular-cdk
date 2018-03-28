import { Component } from '@angular/core';
import { FilePreviewOverlayService } from './service/file-preview-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private filePreviewOverlayService: FilePreviewOverlayService) {}

  showFilePreview() {
  }
}
