import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from '../../model/class/Employee';
import { EmployeeService } from '../../services/employee.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, SpinnerComponent, CommonModule, LayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: '',
  };

  isLoading: boolean = false;

  employeeList: any[] = [];
  employeeService = inject(EmployeeService);

  employeeObj: IEmployee = new IEmployee();

  router = inject(Router);

  onLogin(id: any) {
    this.employeeService.getEmployee(id).subscribe((res) => {
      this.employeeObj = res;
      this.isLoading = true;
    });

    setTimeout(() => {
      if (
        this.loginObj.email == this.employeeObj.id &&
        this.loginObj.password == this.employeeObj.name
      ) {
        this.router.navigateByUrl('/home');
        localStorage.setItem('empErpUser', this.loginObj.email);
        this.isLoading = false;
      } else {
        alert('Invalid Account!');
        this.isLoading = false;
      }
    }, 500);
  }
}
