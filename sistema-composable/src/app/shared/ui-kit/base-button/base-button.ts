import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-button.html',
  styleUrl: './base-button.scss' // <-- Vinculado al archivo externo
})
export class BaseButtonComponent {
  variant = input<'primary' | 'outline'>('primary');
  disabled = input<boolean>(false);
  type = input<'button' | 'submit'>('button');
  
  onClick = output<MouseEvent>();
}