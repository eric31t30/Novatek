import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { OverviewComponent } from '../overview/overview.component';
import { StatsCounterComponent } from '../stats-counter/stats-counter.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';

import { HeadService } from '../../../services/head.service';
import { AOSService } from '../../../services/aos/aos.service';


@Component({
  selector: 'app-home',
  imports: [HeroComponent, OverviewComponent, StatsCounterComponent, TestimonialsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})

export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private headService: HeadService) {}
  private aosService = inject(AOSService);

  ngOnInit(): void {
    this.headService.preloadImages([
      '/assets/home-section/hero/hero-background.svg',
      '/assets/home-section/hero/background-deco.svg',
      '/assets/home-section/hero/wave-divider-2.svg'
    ]);

  }

  ngAfterViewInit() {
    this.aosService.initAOS({
      duration: 1000
    });

    this.aosService.refreshAOS();
  }
  
  
}