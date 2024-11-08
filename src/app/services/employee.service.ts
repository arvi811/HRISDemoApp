import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../model/class/Employee';
import { environment } from '../../environments/environment.development';
import { IEmployee2 } from '../model/interface/IEmployee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<IEmployee> {
    return this.http.get<IEmployee>(environment.API_EMPLOYEE_URL + 'Employee');
  }

  getEmployee(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(
      environment.API_EMPLOYEE_URL + 'Employee/' + id
    );
  }

  addEmployee(obj: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(
      environment.API_EMPLOYEE_URL + 'Employee',
      obj
    );
  }

  updateEmployee(id: number, obj: IEmployee): Observable<IEmployee> {
    return this.http.put<IEmployee>(
      environment.API_EMPLOYEE_URL + 'Employee/' + JSON.stringify(id),
      obj
    );
  }

  deletePokemonById(id: number): Observable<IEmployee> {
    return this.http.delete<IEmployee>(
      environment.API_EMPLOYEE_URL + 'Employee/' + id
    );
  }
}
