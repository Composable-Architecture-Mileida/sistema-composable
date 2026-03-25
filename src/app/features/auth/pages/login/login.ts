import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseInputComponent } from '../../../../shared/ui-kit/base-input/base-input';
import { BaseButtonComponent } from '../../../../shared/ui-kit/base-button/base-button';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, BaseInputComponent, BaseButtonComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  private authService = inject(AuthService);
  
  email = signal('');
  password = signal('');

  onEmailChange(val: string) { this.email.set(val); }
  onPasswordChange(val: string) { this.password.set(val); }

  handleLogin() {
    console.log('Intentando login con:', this.email(), this.password());
    // Aquí conectarás luego con tu microservicio de Node.js
  }
}