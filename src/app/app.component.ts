
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs';


import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CookiesComponent, ScrollToTopComponent, LoaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'novatek';

  isLoading = false;
  private loaderTimeout: any;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderTimeout = setTimeout(() => {
          this.isLoading = true;
        }, 200);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        clearTimeout(this.loaderTimeout);
        this.isLoading = false;
      }
    });
  }
}
