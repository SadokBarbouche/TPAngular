import { Injectable } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CvServiceService {
  private personnes: Personne[];
  link = 'https://apilb.tridevs.net/api/personnes';
  constructor(private toastr: ToastrService, private http: HttpClient) {
    this.personnes = [
      new Personne(
        1,
        'Foulen',
        'Ben Foulen',
        23,
        2222222,
        'Student',
        'rotating_card_profile2.png'
      ),
      new Personne(
        2,
        'Fawzi',
        'Ben Gamra',
        22,
        1111111,
        'Chanteur',
        'rotating_card_profile3.png'
      ),
      new Personne(2, 'Test', 'Tp', 30, 450124, 'Student', ''),
    ];
  }
  // getPersonnes(): Personne[] {
  //   return this.personnes;
  // }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }
  getFakeData() {
    return this.personnes;
  }

  getPersonById(id: number): Personne | undefined {
    return this.personnes.find((person) => person.id == id);
  }

  deletePersonById(id: number): boolean {
    const index = this.personnes.findIndex((person) => person.id == id);
    if (index === -1) {
      return false;
    } else {
      this.toastr.success(
        `${this.personnes[index]['firstname']}'supprimé avec succes`,
        '',
        {
          timeOut: 1000,
          toastClass:
            'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-green-300',
        }
      );
      this.personnes.splice(index, 1);
      return true;
    }
  }
}
