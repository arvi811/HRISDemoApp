import { Component, inject, Input, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    LoginComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  router = inject(Router);

  ngOnInit(): void {
    console.log('test start');
  }

  onLogOut() {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('empErpUser');
  }
}
