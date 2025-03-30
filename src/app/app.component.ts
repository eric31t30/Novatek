import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us/about-us.component';
import { ServicesComponent } from './components/services/services/services.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { WorkWithUsComponent } from './components/work-with-us/work-with-us/work-with-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, AboutUsComponent, ServicesComponent, ContactComponent, WorkWithUsComponent,HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'novatek';
}
