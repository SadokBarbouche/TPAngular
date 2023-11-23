import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fils',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css'
})
export class FilsComponent implements OnInit{
 
  myFavoriteColor="yellow";
  @Input() parentColor!:string;
  @Output() SendColor = new EventEmitter()

  constructor(){}

  ngOnInit(): void {
    
  }
  
  onclick(){
    this.SendColor.emit(
      this.myFavoriteColor
    )
  }
  
}
