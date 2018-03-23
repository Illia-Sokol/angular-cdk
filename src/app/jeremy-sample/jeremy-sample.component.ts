import {
    Component,
} from '@angular/core';

@Component({
    selector: 'app-jeremy-sample',
    templateUrl: './jeremy-sample.component.html',
    styles: [`
    .myPopover {
        background: lightblue;
        padding: 30px;
        border: 1px solid blue;
      }
    `]
})
export class JeremyCdkOverlayComponent {
    public isOpen = false;

    closePopover() {
        this.isOpen = !this.isOpen;
    }
}
