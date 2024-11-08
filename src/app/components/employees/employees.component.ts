import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { HttpHeaders } from '@angular/common/http';
import { IEmployee } from '../../model/class/Employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent implements OnInit {
  employeeList: any[] = [];
  employeeService = inject(EmployeeService);

  employeeObj: IEmployee = new IEmployee();

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((res: any) => {
      this.employeeList = res;
    });
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete?');
    if (isDelete) {
      this.employeeService.deletePokemonById(id).subscribe((res: IEmployee) => {
        alert('Delete Employee success!');
        this.getAllEmployees();
        this.employeeObj = new IEmployee();
      });
    }
  }

  onSaveEmployee() {
    this.employeeService.addEmployee(this.employeeObj).subscribe((res: any) => {
      alert('Create Employee Success!');
      this.employeeObj = new IEmployee();
      this.getAllEmployees();
    });
  }

  onEdit(data: any) {
    this.employeeObj = data;
  }
  onClearEmployee() {
    this.employeeObj = new IEmployee();
  }

  onUpdateEmployee() {
    this.employeeService
      .updateEmployee(this.employeeObj.id, this.employeeObj)
      .subscribe((res) => {
        alert('Update Employee Success!');
        this.employeeObj = new IEmployee();
        this.getAllEmployees();
      });
  }
  onSearch(id: number) {
    // this.employeeService.getEmployee(id).subscribe((res) => {
    //   this.employeeList[0] = res;
    // });
  }
}
