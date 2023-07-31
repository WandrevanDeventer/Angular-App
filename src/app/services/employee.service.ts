import { Injectable } from '@angular/core';
import { Employee } from './employee.model.ts';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'John Doe', position: 'Manager' },
    { id: 2, name: 'Jane Smith', position: 'Developer' },
    // Add more employees as needed...
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(employee => employee.id === id);
  }

  addEmployee(employee: Employee): void {
    // Generate a unique ID (you might use a more robust method in production)
    const id = this.employees.length > 0 ? Math.max(...this.employees.map(e => e.id)) + 1 : 1;
    employee.id = id;
    this.employees.push(employee);
  }

  updateEmployee(employee: Employee): void {
    const index = this.employees.findIndex(e => e.id === employee.id);
    if (index !== -1) {
      this.employees[index] = employee;
    }
  }
}

