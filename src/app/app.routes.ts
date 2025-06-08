import { Routes } from '@angular/router';
import { Page404Component } from './components/page-404/page-404.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/Inicio',
    pathMatch: 'full',
  },
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
  {
    path: 'vacante/:slug',
    loadComponent: () =>
      import('./components/job-details/job-details.component').then(m => m.JobDetailsComponent),
  },
  {
    path: 'Politica-de-privacidad',
    loadComponent: () =>
      import('./components/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
  },
  {
    path: 'Terminos-y-condiciones',
    loadComponent: () =>
      import('./components/terms-and-conditions/terms-and-conditions.component').then(m => m.TermsAndConditionsComponent),
  },
  {
    path: 'Politica-de-cookies',
    loadComponent: () =>
      import('./components/cookies-policy/cookies-policy.component').then(m => m.CookiesPolicyComponent),
  },
  { path: 'page-404', component: Page404Component },
  { path: '**', redirectTo: '/page-404' }
];