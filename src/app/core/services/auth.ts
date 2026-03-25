import { Injectable, signal, computed } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Estado privado: Usamos un Signal para que sea reactivo
  private _user = signal<User | null>(null);

  // Selectores públicos (Readonly para que nadie los cambie desde fuera)
  user = this._user.asReadonly();
  
  // Computed: Se actualiza solo cuando el usuario cambia
  isAuthenticated = computed(() => !!this._user());

  constructor() {
    // Aquí podrías cargar el usuario desde localStorage si existe (Hydration)
  }

  setSession(user: User) {
    this._user.set(user);
    // En 2026, usaríamos una cookie segura o localStorage aquí
  }

  logout() {
    this._user.set(null);
  }
}