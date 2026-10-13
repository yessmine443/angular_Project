import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Template } from './template/template';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Template, CommonModule,Login],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  title = 'Mon application Angular';
  constructor(private router:Router){}
  b:boolean = false; // true quand on est sur la page /login

  ngOnInit(): void {
    this.router.events
      .subscribe(() => {
        this.b = this.router.url.includes('/login');
      });
  }
}