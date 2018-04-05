import { Component } from '@angular/core';

@Component({
    selector: 'app-option',
    templateUrl: './option.component.html',
    styles: [`
        :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #a3caa3;
            margin: 1px;
        }
    `]
})

export class OptionComponent {}
