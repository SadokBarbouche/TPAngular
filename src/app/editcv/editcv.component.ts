import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCvComponent } from '../Platform/detail-cv/detail-cv.component';
import { Personne } from '../Model/Personne';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editcv',
  standalone: true,
  imports: [CommonModule, DetailCvComponent, FormsModule],
  templateUrl: './editcv.component.html',
  styleUrl: './editcv.component.css',
})
export class EditcvComponent implements OnInit {
  personne!: Personne;

  constructor() {
    this.personne = new Personne(
      1,
      'Besbes',
      'Med Seifeddine',
      24,
      88888,
      'Student',
      'rotating_card_profile2.png'
    );
  }

  ngOnInit(): void {
    console.log(this.personne);
  }
}
