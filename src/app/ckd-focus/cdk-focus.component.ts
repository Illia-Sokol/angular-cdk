// https://codeburst.io/angular-cdk-getting-started-accessibility-a11y-1b6143b961c

// http://www.aisoftwarellc.com/blog/post/angular-component-development-kit-(cdk)/2057

import {
    Component,
    AfterViewInit,
    ViewChildren,
    QueryList,
    HostListener,
    ViewChild,
    ElementRef
} from '@angular/core';
import { FocusTrapFactory, FocusMonitor, ListKeyManager, FocusTrap } from '@angular/cdk/a11y';

@Component({
    selector: 'cdk-focus',
    templateUrl: './cdk-focus.component.html',
    styleUrls: ['./cdk-focus.component.less']
})

export class CdkFocusComponent implements AfterViewInit {
    inputs: Array<number> = [1, 2, 3, 4, 5, 6, 7];
    keyManager: ListKeyManager<any>;

    @ViewChild('element') element: ElementRef;
    @ViewChildren('child') elementChild: QueryList<any>;

    constructor(
        private focusTrap: FocusTrapFactory,
        private focusMonitor: FocusMonitor
    ) {}

    ngAfterViewInit() {
        this.keyManager = new ListKeyManager(this.elementChild);
        this.keyManager.withVerticalOrientation();
        this.keyManager.withHorizontalOrientation('ltr');
        this.keyManager.withWrap();
    }

    @HostListener('keyup', ['$event'])
    keyFunc(event) {
        if (event.keyCode !== 'Tab') {
            this.keyManager.onKeydown(event);
            this.focusMonitor.focusVia(this.keyManager.activeItem.nativeElement, 'keyboard');
            this.keyManager.setNextItemActive();
        } else {
            this.keyManager.onKeydown(event);
            this.keyManager.setNextItemActive();
        }
    }

    public testA11() {
        // this.element.nativeElement.hidden = false;
        // const focusTrap = this.focusTrap.create(this.element.nativeElement);
        // const focusTrap = this.focusTrap.create(this.elementChild);
        // focusTrap.focusInitialElement();
        // this.keyManager.setFirstItemActive();

        // this.keyManager.setFirstItemActive();
        // this.keyManager.activeItem;

        const focus: FocusTrap = this.focusTrap.create(this.element.nativeElement);
        focus.focusInitialElement();
        this.keyManager.setFirstItemActive();
        // let focus = new FocusTrapFactory(this.keyManager.activeItem);
    }
}
