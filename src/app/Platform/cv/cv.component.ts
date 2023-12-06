import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { Personne } from '../../Model/Personne';
import { DefaultImagePipe } from '../default-image.pipe';
import { CvServiceService } from './cv-service.service';
import { EmbaucheComponent } from './embauche/embauche.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    CommonModule,
    DetailCvComponent,
    ListeCvComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    PageDetailComponent
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne!: Personne;
  constructor(
    private cvService: CvServiceService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
        this.toastr.success('Personnes chargées avec succès', '', {
          timeOut: 1000,
          toastClass:
            'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-yellow-200',
        });
      },
      (error) => {
        this.personnes = this.cvService.getFakeData();
        this.toastr.error('Problème de chargement des données', '', {
          timeOut: 1000,
          toastClass:
            'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-red-200',
        });
      }
    );
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
