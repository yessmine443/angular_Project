import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-template',
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  constructor(private As: AuthService, private router: Router) {}

  logout() {
    this.As.logout().then(() => this.router.navigate(['/login']));
  }
}