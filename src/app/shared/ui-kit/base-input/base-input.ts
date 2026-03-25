import { Component, input, output  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="input-container">
      <label *ngIf="label()">{{ label() }}</label>
      <input 
        [type]="type()" 
        [placeholder]="placeholder()" 
        [value]="value()"
        (input)="handleInput($event)"
        [class.error]="hasError()"
      />
      <span class="error-msg" *ngIf="hasError()">{{ errorMessage() }}</span>
    </div>
  `,
  styles: [`
    .input-container { display: flex; flex-direction: column; margin-bottom: 1rem; }
    input { padding: 10px; border: 1px solid #ccc; border-radius: 4px; }
    .error { border-color: red; }
    .error-msg { color: red; font-size: 0.8rem; }
  `]
})
export class BaseInputComponent {
  // Inputs definidos como Signals
  label = input<string>('');
  type = input<'text' | 'password' | 'email'>('text');
  placeholder = input<string>('');
  value = input<string>('');
  hasError = input<boolean>(false);
  errorMessage = input<string>('Campo requerido');

  // Output para enviar el valor al padre
  valueChange = output<string>();

  handleInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.valueChange.emit(val);
  }
}