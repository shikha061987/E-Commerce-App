import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideRouter(routes, withHashLocation()) // Enables hash-based routing
  ]
};

