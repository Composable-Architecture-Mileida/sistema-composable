import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importa el Router
import { BaseInputComponent } from '../../../../shared/ui-kit/base-input/base-input';
import { BaseButtonComponent } from '../../../../shared/ui-kit/base-button/base-button';
import { BaseNotificationComponent } from '../../../../shared/ui-kit/base-notification/base-notification';
import { BaseModalComponent } from '../../../../shared/ui-kit/base-modal/base-modal';
import { BaseLoaderComponent } from '../../../../shared/ui-kit/base-loader/base-loader';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, BaseInputComponent, BaseButtonComponent , BaseNotificationComponent, BaseModalComponent, BaseLoaderComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router); // Inyectamos el router para navegar

  
  email = signal('');
  password = signal('');

  // Signals para manejar el mensaje de la UI
  feedbackMessage = signal<string>('');
  feedbackType = signal<'success' | 'error'>('success');

  showConfirmModal = signal(false);

  isLoading = signal(false); // Nuevo Signal de carga

  onEmailChange(val: string) { this.email.set(val); }
  onPasswordChange(val: string) { this.password.set(val); }

  handleLogin() {
    this.isLoading.set(true); // Encendemos el loader

    // Simulamos una espera de red (2 segundos)
    setTimeout(() => {
        const success = this.authService.login(this.email(), this.password());
        this.isLoading.set(false); // Apagamos el loader
        if (!success) {
        this.feedbackMessage.set('Credenciales incorrectas');
        this.feedbackType.set('error');
      }
      /*   if (success) 
        {
          // Si el login es exitoso, mandamos al usuario a una ruta interna
          // Por ahora la redirigiremos a una que crearemos luego
          this.feedbackType.set('success');
          this.feedbackMessage.set('¡Bienvenida, ' + this.authService.currentUser().name + '!');
          // this.router.navigate(['/dashboard']); 
        }
        else
        { 
          this.feedbackType.set('error');
          this.feedbackMessage.set('Credenciales inválidas.Por favor, completa los campos');
          this.showConfirmModal.set(true); // Abrimos el modal genérico

        } */
      }, 2000);


  }

  processReset()
  {
     console.log('Usuario aceptó el proceso');
     this.showConfirmModal.set(false);
  }
}