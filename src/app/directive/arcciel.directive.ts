import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appArcciel]',
  standalone: true
})
export class ArccielDirective {

  ColorTab = [
    "blue",
    "green",
    "yellow",
    "red",
    "black"
  ]

  @HostBinding('style.borderColor') bordercolor!:string;
  @HostBinding('style.color') color!:string;
  constructor() { }

  @HostListener('keypress') changecolor(){
    const randbg = Math.floor(Math.random()*(this.ColorTab.length -1));
    const randcolor = Math.floor(Math.random()*(this.ColorTab.length -1));
    this.bordercolor = this.ColorTab[randbg];
    this.color = this.ColorTab[randcolor];
  }


}
