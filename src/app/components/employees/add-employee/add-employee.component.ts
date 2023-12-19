import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    salary: 0,
    phone: 0,
    department: ''
  }

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        //console.log(employee);
        this.router.navigate(['employees']);
      }
    })
  }

}
