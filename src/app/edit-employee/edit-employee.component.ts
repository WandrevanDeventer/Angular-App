import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html'
})
export class EditEmployeeComponent implements OnInit {
  employeeId: number = 0;
  employee: Employee | undefined;

  constructor(private employeeService: EmployeeService) { }

    ngOnInit(): void {
    }
  }
  
