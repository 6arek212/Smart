import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective {

  @Input() maxNumber: number
  @Input() startNumber: number = 0
  @Input() interval: number = 0
  timer


  constructor(private el: ElementRef, private renderer: Renderer2
  ) {

  }

  ngOnInit(): void {
    this.renderer.setProperty(this.el.nativeElement, 'textContent', this.startNumber)
    console.dir(this.el.nativeElement);
    this.startCount()
  }

  startCount() {
    this.timer = setInterval(() => {
      if (this.startNumber < this.maxNumber)
        this.renderer.setProperty(this.el.nativeElement, 'textContent', ++this.startNumber)
      else {
        this.clear()
      }
    }, 1)
  }


  clear() {
    clearTimeout(this.timer)
  }
}
