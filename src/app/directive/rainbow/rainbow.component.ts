import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArccielDirective } from '../arcciel.directive';

@Component({
  selector: 'app-rainbow',
  standalone: true,
  imports: [CommonModule,ArccielDirective],
  templateUrl: './rainbow.component.html',
  styleUrl: './rainbow.component.css'
})
export class RainbowComponent {

}
