import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diabetic } from './diabetic';

@Injectable({
  providedIn: 'root'
})
export class DiabeticService {
  private apiUrl = 'http://localhost:8083/api/diabetics';

  constructor(private http: HttpClient) { }

  getAllDiabetics(): Observable<Diabetic[]> {
    return this.http.get<Diabetic[]>(`${this.apiUrl}`);
  }

  getDiabeticById(id: number): Observable<Diabetic> {
    return this.http.get<Diabetic>(`${this.apiUrl}/${id}`);
  }

  addDiabetic(diabetic: Diabetic): Observable<Diabetic> {
    return this.http.post<Diabetic>(`${this.apiUrl}`, diabetic);
  }

  deleteDiabetic(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
