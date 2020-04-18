import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[addAttributeOn]'
})
export class ClassDirectiveDirective {

  constructor(private element: ElementRef) { }

  @Input() myClassToAdd: string;
  @Input('addAttributeOn') elementIdToReach: string;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elementOffsetTop = document.getElementById('toReach').offsetTop;
    if (elementOffsetTop <= window.pageYOffset) {
      this.element.nativeElement.classList.add(this.myClassToAdd);
    } else {
      this.element.nativeElement.classList.remove(this.myClassToAdd);
    }
  }
}
