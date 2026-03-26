import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from '../base-button/base-button';

@Component({
  selector: 'app-base-modal',
  standalone: true,
  imports: [CommonModule, BaseButtonComponent],
  templateUrl: './base-modal.html',
  styleUrl: './base-modal.scss',
})
export class BaseModalComponent 
{
  title = input<string>('Confirmación');
  message = input<string>('');
  confirmText = input<string>('Aceptar');
  cancelText = input<string>('Cancelar');
  isOpen = input<boolean>(false);

  onConfirm = output<void>();
  onCancel = output<void>();
}
