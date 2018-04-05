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

@Directive({
    selector: '[role="dialog"]'
})
export class RoleDirective implements Highlightable {
    isActive = false;
    setActiveStyles(): void {
        this.isActive = true;
    }

    setInactiveStyles(): void {
        this.isActive = false;
    }
}


@Component({
    selector: 'cdk-focus',
    templateUrl: './cdk-focus.component.html',
    styleUrls: ['./cdk-focus.component.less']
})

export class CdkFocusComponent implements AfterViewInit {
    keyManager: any;

    @ViewChild('element') element: ElementRef;
    @ViewChildren(OptionComponent) elementChild: QueryList<OptionComponent>;
    @ContentChildren(OptionComponent) elementChild2: QueryList<OptionComponent>;

    constructor( private focusTrap: FocusTrapFactory,
                private focusMonitor: FocusMonitor ) {}

    ngAfterViewInit() {
        // this.keyManager = new ListKeyManager(this.elementChild);
        // this.keyManager.withHorizontalOrientation('ltr');   // Arrow navigation options
        // this.keyManager.withWrap();  // Arrow navigation options
    }

    /* Enables keyboard arrows navigation */
    // @HostListener('window:keyup', ['$event'])
    // keyFunc(event) {
    //     if (event.code !== 'Tab') {
    //     this.keyManager.onKeydown(event);
    //     this.focusMonitor.focusVia(this.keyManager.activeItem.nativeElement, 'keyboard');
    //     } else {  // 'artificially' updates the active element in case the user uses Tab instead of arrows
    //     this.keyManager.onKeydown(event);
    //     this.keyManager.setNextItemActive();
    //     }
    // }

    /* Shows the form, puts focus on it and initialize keyboard navigation */
    testA11y() {
        this.element.nativeElement.hidden = false;
        const focusTrap = this.focusTrap.create(this.element.nativeElement);  // creates a focus trap region
        focusTrap.focusInitialElement(); // Moves the focus in the form (by default the first field)
        // this.keyManager.setFirstItemActive();  // Sets the element we focused on as 'active' to the KeyManager
    }
}
