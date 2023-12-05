import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './Platform/cv/cv.component';
import { EditcvComponent } from './editcv/editcv.component';
import { Personne } from './Model/Personne';
import { DetailCvComponent } from './Platform/detail-cv/detail-cv.component';
import { MiniwordComponent } from './directive/miniword/miniword.component';
import { RainbowComponent } from './directive/rainbow/rainbow.component';
import { EmbaucheComponent } from './Platform/cv/embauche/embauche.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ColorComponent,
    CvComponent,
    EditcvComponent,
    DetailCvComponent,
    MiniwordComponent,
    RainbowComponent,
    EmbaucheComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  personne!: Personne;

  constructor() {}

  ngOnInit(): void {}
}
