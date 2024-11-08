import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IEmployee } from '../../model/class/Employee';
import { EmployeeService } from '../../services/employee.service';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  employeeList: any[] = [];
  employeeService = inject(EmployeeService);

  employeeObj: IEmployee = new IEmployee();

  ngOnInit(): void {
    console.log('test');
  }

}
