import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer ) {   //this will automatically create a private property this.elementaRef
     //   this.elementRef.nativeElement.style.backgroundColor = 'green';  //One way to create some properties in the directive
  //    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');   //This is the better way of doing the same
  }  
      @HostListener('mouseenter') mouseover(){
        this.backgroundColor = this.highlightColor;  
      };
      @HostListener('mouseleave') mouseleave(){
        this.backgroundColor = this.defaultColor;  
      };
      @HostBinding('style.backgroundColor') get setColor() {  //This is the way to write in typescript get means this is 
      //read only property, property name is setColor which internally angualar2 will change from function to property
        return this.backgroundColor;    
      }
      @Input() defaultColor = 'white';
      @Input() highlightColor = 'green';
      private backgroundColor = this.defaultColor;
    
      ngOnInit() {
          this.backgroundColor = this.defaultColor;
      } 
}
