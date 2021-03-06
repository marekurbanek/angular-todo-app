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

  addOrUpdateTask(formData): Observable<any> {
    return this.http.post('http://tests.mpcreation.net/api/urbanek.marek', formData);
  }

  deleteTask(id): Observable<any> {
    return this.http.delete(`http://tests.mpcreation.net/api/urbanek.marek/${id}`);
  }
}
