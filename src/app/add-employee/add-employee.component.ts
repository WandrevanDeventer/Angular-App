import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {
  newEmployee: Employee = { id: 0, name: '', position: '' };

  constructor(private employeeService: EmployeeService) { }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee);
    this.newEmployee = { id: 0, name: '', position: '' };
  }
}
