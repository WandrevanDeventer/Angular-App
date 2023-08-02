import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
  public editemployee(){
    this.router.navigate(['/edit-employee']);
  }
}

