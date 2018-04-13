import { Component, HostListener } from '@angular/core';
import { ListKeyManagerOption } from '@angular/cdk/a11y';

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

        :host(.color) {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
            border: 2px solid transparent;
        }

        :host(.active-option) {
            border: 2px solid blue;
        }
    `]
})

export class OptionComponent {
    @HostListener('window:keyup', ['$event'])
    onKyedown(event: KeyboardEvent) {
        console.log('hello');
        if (event.key === 'Enter') {
        // this.selectionChanged.emit(new OptionSelectionChange(this.element.nativeElement, true));
        }
    }

    @HostListener('click')
    onClick() {
      console.log(this);
    }

    keyDownHandler(event) {
        console.log('sadfasdf');
    }
}
