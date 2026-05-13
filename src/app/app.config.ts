import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { routes } from './app.routes';
const firebaseConfig = {
  apiKey: 'AIzaSyAf4-h-zEeoZu2N3Xx1L9TTSw5Dc_xFqPI',
  authDomain: 'formulario-ea9c8.firebaseapp.com',
  projectId: 'formulario-ea9c8',
  storageBucket: 'formulario-ea9c8.appspot.com',
  messagingSenderId: '794412080340',
  appId: '1:794412080340:web:a330a6eecb08fde36d6f41',
  measurementId: 'G-G5QKZ3RTH7',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch()),

    // Firebase providers
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
