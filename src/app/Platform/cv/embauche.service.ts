import { Injectable } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  constructor(private toastr: ToastrService) {
    this.personnes = [];
  }

  private personnes: Personne[];

  getEmbaucher(): Personne[] {
    return this.personnes;
  }
  embaucher(personne: Personne): void {
    if (this.personnes.includes(personne)) {
      // alert(`${personne.name} ${personne.firstname} est déjà embauché`);
      this.toastr.warning(
        `${personne.name} ${personne.firstname} est déjà embauché`,
        '',
        {
          timeOut: 1000,
          toastClass:
            'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-yellow-200',
        }
      );
    } else {
      this.personnes.push(personne);
      this.toastr.success(
        `${personne.name} ${personne.firstname} est ajouté comme embauchement avec succes`,
        '',
        {
          timeOut: 1000,
          toastClass:
            'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-yellow-200',
        }
      );
    }
  }
  debaucher(personne: Personne): void {
    if (this.personnes.includes(personne)) {
      this.personnes.splice(this.personnes.indexOf(personne), 1);
    }
  }
}
