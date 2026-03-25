import { Injectable, signal, computed } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Estado privado: Usamos un Signal para que sea reactivo
  //private _user = signal<User | null>(null);
  // Estado privado usando Signals
  private _currentUser = signal<any | null>(null);

  // Selectores públicos (Readonly para que nadie los cambie desde fuera)
  //user = this._user.asReadonly();
  currentUser = this._currentUser.asReadonly();
  
  // Computed: Se actualiza solo cuando el usuario cambia
  //isAuthenticated = computed(() => !!this._user());
  isAuthenticated = computed(() => !!this._currentUser());

  constructor() {
    // Aquí podrías cargar el usuario desde localStorage si existe (Hydration)
  }

  /*setSession(user: User) {
    this._user.set(user);
    // En 2026, usaríamos una cookie segura o localStorage aquí
  }

  logout() {
    this._user.set(null);
  }*/

  login(email: string, pass: string) {
    // Simulación de login (Próximamente conectaremos con Node.js)
    if (email && pass) {
      const mockUser = { id: 1, name: 'Mileida', email };
      this._currentUser.set(mockUser);
      console.log('✅ Sesión iniciada para:', mockUser.name);
      return true;
    }
    return false;
  }

  logout() {
    this._currentUser.set(null);
  }
}