import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  inputs: Array<number> = [1, 2, 3, 4, 5, 6, 7];

  colors = [
    {hex: '#ff8000'},
    {hex: '#ffbf00'},
    {hex: '#ffff00'},
    {hex: '#bfff00'},
    {hex: '#80ff00'},
    {hex: '#00bfff'},
    {hex: '#0080ff'},
    {hex: '#bf00ff'},
    {hex: '#ff00ff'},
    {hex: '#ff00bf'}
  ];
}
