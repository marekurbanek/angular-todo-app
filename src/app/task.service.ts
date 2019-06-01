import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get('http://tests.mpcreation.net/api/urbanek.marek');
  }

  addTask(formData): Observable<any> {
    return this.http.post('http://tests.mpcreation.net/api/urbanek.marek', formData);
  }
}
