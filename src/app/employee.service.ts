import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/employees/' + id);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/employees', employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseUrl + '/employees/' + id, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/employees/' + id);
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(this.baseUrl + '/employees');
  }
}
