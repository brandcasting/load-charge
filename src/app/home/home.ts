import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  progress = 80;
  isAnimating = false;

  pulse() {
    // evita múltiples clicks
    if (this.isAnimating) return;

    this.isAnimating = true;

    // sube SOLO a 81
    this.progress = 81;

    // termina animación
    setTimeout(() => {
      // vuelve a 80
      this.progress = 80;

      this.isAnimating = false;
    }, 1200);
  }
}
