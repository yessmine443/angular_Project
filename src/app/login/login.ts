import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { AuthService } from '../auth-service';


@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormField, MatLabel, MatInput, MatButton],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';

  constructor(private AS: AuthService, private router: Router) {}

  login() {
  this.AS.signInWithEmailAndPassword(this.email, this.password)
    .then(() => this.router.navigate(['/members']))
    .catch((error) => console.error('Échec de la connexion', error));
}
}