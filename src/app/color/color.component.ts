import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilsComponent } from './fils/fils.component';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule,FilsComponent],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {
 color = "red"

 changeColor(input: { value: string; }){
  this.color = input.value
  input.value= ''
 }

 changeBackgroun(filsfavorcolor:string){
    this.color=filsfavorcolor
 }

}
