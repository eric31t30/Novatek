import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us/about-us.component';
import { ServicesComponent } from './components/services/services/services.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { WorkWithUsComponent } from './components/work-with-us/work-with-us/work-with-us.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
    {
        path: 'Inicio',
        loadComponent: () =>
          import('./components/home/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'Nosotros',
        loadComponent: () =>
          import('./components/about-us/about-us/about-us.component').then(m => m.AboutUsComponent),
    },
    {
        path: 'Servicios',
        loadComponent: () =>
          import('./components/services/services/services.component').then(m => m.ServicesComponent),
    },
    {
        path: 'Contacto',
        loadComponent: () =>
          import('./components/contact/contact/contact.component').then(m => m.ContactComponent),
    },
    {
        path: 'Trabaja-con-nosotros',
        loadComponent: () =>
          import('./components/work-with-us/work-with-us/work-with-us.component').then(m => m.WorkWithUsComponent),
    },
];
