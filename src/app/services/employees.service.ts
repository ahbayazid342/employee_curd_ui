import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl = 'https://localhost:7144';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + '/api/employees');
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    addEmployeeRequest.id = '6B29FC40-CA47-1067-B31D-00DD010662DA';
    return this.http.post<Employee>(this.baseUrl + '/api/employees', addEmployeeRequest);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + '/api/employees/' + id);
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl + '/api/employees/' + id, updateEmployeeRequest);
  }

  deleteEmployee (id: string): Observable<Employee> {
    return this.http.delete<Employee> (this.baseUrl + '/api/employees/' + id);
  }

}
