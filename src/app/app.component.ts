import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  inputs: Array<number> = [1, 2, 3, 4, 5, 6, 7];
}
