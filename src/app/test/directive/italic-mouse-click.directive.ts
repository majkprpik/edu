import {
  Directive,
  OnInit,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[italicMouseClick]"
})
export class ItalicMouseClickDirective implements OnInit {
  @HostBinding('style.fontStyle') fontStyle: string = 'normal';

  @HostListener("click") mouseclick(eventData: Event) {
    this.fontStyle = 'italic';
  }
  

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}
}
