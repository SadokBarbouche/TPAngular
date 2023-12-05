import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../Model/Personne';
import { DefaultImagePipe } from '../default-image.pipe';
import { EmbaucheService } from '../cv/embauche.service';

@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './detail-cv.component.html',
  styleUrl: './detail-cv.component.css',
})
export class DetailCvComponent {
  @Input() personne!: Personne;
  constructor(private embaucherService: EmbaucheService) {}
  ngOnInit(): void {}
  embaucher() {
    this.embaucherService.embaucher(this.personne);
  }
}
