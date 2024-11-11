import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { HttpHeaders } from '@angular/common/http';
import { IEmployee } from '../../model/class/Employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, SpinnerComponent, CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent implements OnInit {
  isLoading: boolean = false;
  employeeList: any[] = [];
  employeeService = inject(EmployeeService);

  employeeObj: IEmployee = new IEmployee();

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((res: any) => {
      this.isLoading = true;
      setTimeout(() => {
        this.employeeList = res;
        this.isLoading = false;
      }, 500);
    });
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete?');
    if (isDelete) {
      this.employeeService
        .deleteEmployeeById(id)
        .subscribe((res: IEmployee) => {
          this.getAllEmployees();
          this.employeeObj = new IEmployee();
          alert('Delete Employee success!');
        });
    }
  }

  onSaveEmployee() {
    const isSave = confirm('Confirmaton for Saving data');
    if (isSave) {
      this.employeeService
        .addEmployee(this.employeeObj)
        .subscribe((res: any) => {
          this.employeeObj = new IEmployee();
          this.getAllEmployees();
          alert('Create Employee Success!');
        });
    }
  }

  onEdit(data: any) {
    this.employeeObj = data;
  }
  onClearEmployee() {
    this.employeeObj = new IEmployee();
  }

  onUpdateEmployee() {
    const isUpdate = confirm('Confirmaton for Updating data');
    if (isUpdate) {
      this.employeeService
        .updateEmployee(this.employeeObj.id, this.employeeObj)
        .subscribe((res) => {
          this.employeeObj = new IEmployee();
          this.getAllEmployees();
          alert('Update Employee Success!');
        });
    }
  }
  onSearch(id: number) {
    // this.employeeService.getEmployee(id).subscribe((res) => {
    //   this.employeeList[0] = res;
    // });
  }
}
