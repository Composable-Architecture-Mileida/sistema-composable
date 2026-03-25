import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importa el Router
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
  private router = inject(Router); // Inyectamos el router para navegar
  
  email = signal('');
  password = signal('');

  onEmailChange(val: string) { this.email.set(val); }
  onPasswordChange(val: string) { this.password.set(val); }

  handleLogin() {
    const success = this.authService.login(this.email(), this.password());
    
    if (success) {
      // Si el login es exitoso, mandamos al usuario a una ruta interna
      // Por ahora la redirigiremos a una que crearemos luego
      alert('¡Bienvenida, ' + this.authService.currentUser().name + '!');
      // this.router.navigate(['/dashboard']); 
    } else {
      alert('Por favor, completa los campos');
    }
  }
}