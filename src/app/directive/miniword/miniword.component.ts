import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-miniword',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './miniword.component.html',
  styleUrl: './miniword.component.css'
})
export class MiniwordComponent {
  
  textcolor='black';
  fontfamily='Georgia';
  textsize=50

}
