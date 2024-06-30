import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diabetic } from './diabetic';

@Injectable({
  providedIn: 'root'
})
export class DiabeticService {
  private baseUrl = 'http://localhost:8080/api/diabetics';

  constructor(private http: HttpClient) { }

  getDiabetic(id: number): Observable<Diabetic> {
    return this.http.get<Diabetic>(`${this.baseUrl}/${id}`);
  }

  getDiabeticsList(): Observable<Diabetic[]> {
    return this.http.get<Diabetic[]>(`${this.baseUrl}`);
  }

  createDiabetic(diabetic: Diabetic): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, diabetic);
  }

  updateDiabetic(id: number, diabetic: Diabetic): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, diabetic);
  }

  deleteDiabetic(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
