import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';
import $ from 'jquery';

@Directive({
    selector: '[scrollSpy]'
})
export class ScrollSpyOneDirective {
    @Input() public spiedTags = [];
    @Output() public sectionChange = new EventEmitter<string>();
    private currentSection: string;

    constructor(private _el: ElementRef) {}

    @HostListener('scroll', ['$event'])
    onScroll(event: any) {
        let currentSection: string;
        const children = $(this._el.nativeElement).find('div'); //this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        console.log('children', children);
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            console.log('element', element, this.spiedTags)
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }

}
/*

<div id="parentDiv" scrollSpy [spiedTags]="['DIV']" (sectionChange)="onSectionChange($event)" style="height:150px;overflow-y: scroll;">
  <seconecom></seconecom>
  <sectwocom></sectwocom>
  <secthreecom></secthreecom>
  <secfourcom></secfourcom>
</div>

*/
