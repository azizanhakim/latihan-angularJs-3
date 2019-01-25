import { Directive, ElementRef, Renderer2, Input, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {
  @HostBinding('style.color') textColor: string;
	@Input('appHoverHighLight') highLightColor: {background: string, text: string}
  constructor(private elRef: ElementRef, private render: Renderer2) { }

  // ngOnInit(): void{
  //   this.render.setStyle(this.elRef.nativeElement, 'background-color','yellow');
  // }  

  @HostListener ("mouseover") mouseMasuk(eventData : Event){
    this.render.setStyle(this.elRef.nativeElement,'background-color',
    this.highLightColor.background);
    this.textColor = this.highLightColor.text
   }	
  @HostListener ("mouseleave") mouseKeluar(eventData : Event){
    this.render.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.textColor = 'black';
   }
}
