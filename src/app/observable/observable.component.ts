import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
})
export class ObservableComponent implements OnInit {
  monObservable?: Observable<any>;
  images = [
    '../../assets/images/rotating_card_profile.png',
    '../../assets/images/rotating_card_profile2.png',
    '../../assets/images/rotating_card_profile3.png',
  ];

  currImage?: string;
  constructor() {}
  ngOnInit(): void {
    this.monObservable = new Observable((observer) => {
      let i = this.images.length - 1;

      setInterval(() => {
        observer.next(this.images[i]);
        if (i > 0) {
          i--;
        } else {
          i = this.images.length - 1;
        }
      }, 1000);
    });
    this.monObservable.subscribe((result) => {
      this.currImage = result;
    });
  }
}
