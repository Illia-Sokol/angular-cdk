import { Component, Directive, OnInit, ViewChildren, AfterViewInit, QueryList, HostBinding, ContentChildren } from '@angular/core';
import { Highlightable, ActiveDescendantKeyManager } from '@angular/cdk/a11y';

@Directive({
    selector: '[role="option"]'
})
export class ColorOptionDirective implements Highlightable {
    @HostBinding('class.active-option') isActive = false;

    setActiveStyles() {
        this.isActive = true;
    }

    setInactiveStyles() {
        this.isActive = false;
    }
}

@Component({
    selector: 'app-focus-sample',
    templateUrl: 'focus-sample.component.html',
    styleUrls: ['./focus-sample.component.less']
})

export class FocusSampleComponent implements AfterViewInit {
    isOpen = false;
    selectedColor = '';
    activeIndex: number;

    @ViewChildren(ColorOptionDirective) options: QueryList<ColorOptionDirective>;
    @ContentChildren(ColorOptionDirective) options2: QueryList<ColorOptionDirective>;
    keymanager: ActiveDescendantKeyManager<ColorOptionDirective>;

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

    ngAfterViewInit() {
        this.keymanager = new ActiveDescendantKeyManager(this.options2).withWrap();
        this.keymanager.setFirstItemActive();
    }

    keyDownHandler(event: KeyboardEvent) {
        this.keymanager.onKeydown(event);
    }
}
