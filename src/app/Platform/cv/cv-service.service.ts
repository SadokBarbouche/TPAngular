import { Injectable } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Injectable({
  providedIn: 'root',
})
export class CvServiceService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(
        1,
        'Foulen',
        'Ben Falten',
        23,
        2222222,
        'Student',
        'rotating_card_profile2.png'
      ),
      new Personne(
        2,
        'Tounsi',
        'Tounsi',
        22,
        1111111,
        'Student',
        'rotating_card_profile3.png'
      ),
      new Personne(2, 'Test', 'Tp', 30, 450124, 'Student', ''),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
  
}
