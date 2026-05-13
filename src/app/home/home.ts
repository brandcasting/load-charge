import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirebaseService } from '../shared/services/firebase.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  progress = 80;
  isAnimating = false;

  constructor(private firebaseService: FirebaseService) {}

  async pulse() {
    // evita múltiples clicks
    if (this.isAnimating) return;

    this.isAnimating = true;

    // sube SOLO a 81
    this.progress = 81;
    await this.firebaseService.updateAction();
    // termina animación
    setTimeout(() => {
      this.isAnimating = false;
    }, 1000);
  }
}
