import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvServiceService } from '../cv-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../../../Model/Personne';
import { DefaultImagePipe } from '../../default-image.pipe';

@Component({
  selector: 'app-page-detail',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './page-detail.component.html',
  styleUrl: './page-detail.component.css',
})
export class PageDetailComponent implements OnInit {
  constructor(
    private cvService: CvServiceService,
    private activatedRouter: ActivatedRoute
  ) {}
  personne?: Personne;
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      const id = params['id'];
      this.personne = this.cvService.getPersonById(id);
    });
  }
}
  