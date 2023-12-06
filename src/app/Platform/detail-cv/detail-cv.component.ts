import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../Model/Personne';
import { DefaultImagePipe } from '../default-image.pipe';
import { EmbaucheService } from '../cv/embauche.service';
import { Router } from '@angular/router';
import { PageDetailComponent } from '../cv/page-detail/page-detail.component';

@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe,PageDetailComponent],
  templateUrl: './detail-cv.component.html',
  styleUrl: './detail-cv.component.css',
})
export class DetailCvComponent {
  @Input() personne!: Personne;
  constructor(
    private embaucherService: EmbaucheService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  embaucher() {
    this.embaucherService.embaucher(this.personne);
  }
  details() {
    const link = ['cv', this.personne.id];
    this.router.navigate(link);
  }
}
