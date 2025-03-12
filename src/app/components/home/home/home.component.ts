import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { OverviewComponent } from '../overview/overview.component';
import { StatsCounterComponent } from '../stats-counter/stats-counter.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, OverviewComponent, StatsCounterComponent, TestimonialsComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {

}
