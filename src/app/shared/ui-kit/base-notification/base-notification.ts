import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-base-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-notification.html',
  styleUrl: './base-notification.scss',
})
export class BaseNotificationComponent {
  type = input<'success' | 'error'>('success');
  message = input<string>('');
  
  onClose = output<void>();
}