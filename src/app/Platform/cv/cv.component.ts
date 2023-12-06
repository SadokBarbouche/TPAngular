import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { Personne } from '../../Model/Personne';
import { DefaultImagePipe } from '../default-image.pipe';
import { CvServiceService } from './cv-service.service';
import { EmbaucheComponent } from './embauche/embauche.component';
import { PageDetailComponent } from './page-detail/page-detail.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    CommonModule,
    DetailCvComponent,
    ListeCvComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    PageDetailComponent,
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne!: Personne;
  constructor(private cvService: CvServiceService) {}
  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
