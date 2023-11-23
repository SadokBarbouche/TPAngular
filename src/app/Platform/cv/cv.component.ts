import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { Personne } from '../../Model/Personne';
import { DefaultImagePipe } from '../default-image.pipe';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule,DetailCvComponent,ListeCvComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit {
  
  personnes: Personne[] =[] ;
  selectedPersonne!: Personne;
  constructor(){}
  ngOnInit(): void {
    this.personnes= [
      new Personne(1,'Foulen','Ben Falten',23,2222222,'Student','rotating_card_profile2.png'),
      new Personne(2,'Tounsi','Tounsi',22,1111111,'Student','rotating_card_profile3.png'),
      new Personne(2,'Test','Tp',30,450124,'Student',''),
    ]
  }

  selectPersonne(personne:Personne){
    this.selectedPersonne=personne
  }

}
