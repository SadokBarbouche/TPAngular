import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../Model/Personne';
import { DefaultImagePipe } from '../default-image.pipe';

@Component({
  selector: 'app-item-cv',
  standalone: true,
  imports: [CommonModule,DefaultImagePipe],
  templateUrl: './item-cv.component.html',
  styleUrl: './item-cv.component.css'
})
export class ItemCvComponent implements OnInit {
  
  @Input() personne!:Personne ;
  @Output() selectedPersonne = new EventEmitter();

  ngOnInit(): void {
    console.log(this.personne.name)  
  }

  selectPersonne(){
    this,this.selectedPersonne.emit(
      this.personne
    );
  }

}
