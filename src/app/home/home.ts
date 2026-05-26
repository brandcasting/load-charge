import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FirebaseService } from '../shared/services/firebase.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  progress = 15;

  @ViewChild('ring') ring!: ElementRef<HTMLSpanElement>;
  @ViewChild('aura') aura!: ElementRef<HTMLSpanElement>;

  constructor(private firebaseService: FirebaseService) {}

  async pulse() {
    const ringEl = this.ring.nativeElement;
    const auraEl = this.aura.nativeElement;

    // quitar clases
    ringEl.classList.remove('animate-spin-slow');
    auraEl.classList.remove('animate-aura');

    // FORZAR REFLOW
    void ringEl.offsetWidth;
    void auraEl.offsetWidth;

    // volver a agregar
    ringEl.classList.add('animate-spin-slow');
    auraEl.classList.add('animate-aura');

    this.progress = this.progress >= 95 ? 95 : this.progress + 2;

    await this.firebaseService.updateAction();
  }
}
