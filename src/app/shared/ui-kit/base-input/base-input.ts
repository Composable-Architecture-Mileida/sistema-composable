import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-input.html',
  styleUrl: './base-input.scss' // <-- Vinculado
})
export class BaseInputComponent {
  label = input<string>('');
  type = input<'text' | 'password' | 'email'>('text');
  placeholder = input<string>('');
  value = input<string>('');
  error = input<string | null>(null);

  valueChange = output<string>();

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }
}