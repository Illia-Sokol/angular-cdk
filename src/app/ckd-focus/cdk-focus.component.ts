// https://codeburst.io/angular-cdk-getting-started-accessibility-a11y-1b6143b961c

// http://www.aisoftwarellc.com/blog/post/angular-component-development-kit-(cdk)/2057

import {
    Component,
    AfterViewInit,
    ViewChildren,
    QueryList,
    HostListener,
    ViewChild,
    ElementRef,
    Directive,
    ContentChildren
} from '@angular/core';
import {
    FocusTrapFactory,
    FocusMonitor,
    FocusKeyManager,
    ListKeyManager,
    FocusTrap,
    ActiveDescendantKeyManager,
    Highlightable,
    FocusableOption
} from '@angular/cdk/a11y';

import { OptionComponent } from '../option/option.component';

@Component({
    selector: 'cdk-focus',
    templateUrl: './cdk-focus.component.html',
    styleUrls: ['./cdk-focus.component.less']
})

export class CdkFocusComponent implements AfterViewInit {
    inputs: Array<number> = [1, 2, 3, 4, 5, 6, 7];
    keyManager: any;

    @ViewChild('element') element: ElementRef;
    @ViewChildren('children') elemChild: QueryList<any>;
    @ViewChildren(OptionComponent) elementChild: QueryList<OptionComponent>;
    @ContentChildren(OptionComponent) elementChild2: QueryList<OptionComponent>;

    constructor( private focusTrap: FocusTrapFactory,
                private focusMonitor: FocusMonitor ) {}

    ngAfterViewInit() {
        this.keyManager = new ListKeyManager(this.elemChild);
        this.keyManager.withHorizontalOrientation('ltr');   // Arrow navigation options
        this.keyManager.withWrap();  // Arrow navigation options
    }

    /* Enables keyboard arrows navigation */
    @HostListener('window:keyup', ['$event'])
    keyFunc(event) {
        if (event.code !== 'Tab') {
        this.keyManager.onKeydown(event);
        this.focusMonitor.focusVia(this.keyManager.activeItem.nativeElement, 'keyboard');
        this.focusMonitor.focusVia(this.keyManager.activeItem.nativeElement, 'mouse');
        } else {  // 'artificially' updates the active element in case the user uses Tab instead of arrows
        this.keyManager.onKeydown(event);
        this.keyManager.setNextItemActive();
        }
        if (event.code === 'Escape') {
            this.element.nativeElement.hidden = true;
        }
    }

    testA11y() {
        this.element.nativeElement.hidden = false;
        const focusTrap = this.focusTrap.create(this.element.nativeElement);  // creates a focus trap region
        focusTrap.focusInitialElement(); // Moves the focus in the form (by default the first field)
        this.keyManager.setFirstItemActive();  // Sets the element we focused on as 'active' to the KeyManager
    }
}
