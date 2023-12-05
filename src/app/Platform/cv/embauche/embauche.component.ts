import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../../Model/Personne';
import { EmbaucheService } from '../embauche.service';
import { DefaultImagePipe } from '../../default-image.pipe';

@Component({
  selector: 'app-embauche',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './embauche.component.html',
  styleUrl: './embauche.component.css',
})
export class EmbaucheComponent implements OnInit {
  personnes: Personne[];
  constructor(private embaucheService: EmbaucheService) {
    this.personnes = [];
  }
  ngOnInit(): void {
    this.personnes = this.embaucheService.getEmbaucher();
  }
}
