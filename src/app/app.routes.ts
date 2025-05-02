import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
    // {
    //   path: 'Inicio',
    //   loadComponent: () =>
    //     import('./components/home/home/home.component').then(m => m.HomeComponent),
    // },
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
      path: 'job-details/:slug',
      loadComponent: () =>
        import('./components/job-details/job-details.component').then(m => m.JobDetailsComponent),
    },
];
