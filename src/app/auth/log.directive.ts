import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  host: { '(click)': 'onLog()' },
  standalone: true,
})
export class LogDirective {
  private elementRef = inject(ElementRef)
  constructor() {}

  onLog(): void {
    console.log('clicked')
    console.log(this.elementRef.nativeElement)
  }
}
