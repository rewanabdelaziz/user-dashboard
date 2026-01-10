import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  constructor(private ele : ElementRef) { }
   Highlight(color: string | null){
      this.ele.nativeElement.style.backgroundColor = color
    }
    @HostListener('mouseenter') onMouseEnter(){
      this.Highlight('#c1dcf4ff')
    }
    @HostListener('mouseleave') onMouseLeave(){
      this.Highlight(null)
    }

}
