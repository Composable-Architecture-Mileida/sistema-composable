
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-loader.html',
  styleUrl: './base-loader.scss',
})
export class BaseLoaderComponent {
    // Si es true, oscurece toda la pantalla. Si es false, se ajusta al padre.
  fullScreen = input<boolean>(false);
  message = input<string>(''); // Opcional: "Cargando...", "Validando..."
}


