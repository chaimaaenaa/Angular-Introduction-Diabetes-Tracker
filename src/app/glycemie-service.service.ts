import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Glycemie } from './glycemie';

@Injectable({
  providedIn: 'root'
})
export class GlycemieService {
  private apiUrl = 'http://localhost:8083/api/glycemies';

  constructor(private http: HttpClient) { }

  getAllGlycemies(): Observable<Glycemie[]> {
    return this.http.get<Glycemie[]>(`${this.apiUrl}`);
  }

  getGlycemieById(id: number): Observable<Glycemie> {
    return this.http.get<Glycemie>(`${this.apiUrl}/${id}`);
  }

  addGlycemie(glycemie: Glycemie): Observable<Glycemie> {
    return this.http.post<Glycemie>(`${this.apiUrl}`, glycemie);
  }

  updateGlycemie(id: number | undefined, glycemie: Glycemie): Observable<Glycemie> {
    return this.http.put<Glycemie>(`${this.apiUrl}/${id}`, glycemie);
  }



  deleteGlycemie(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
