import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { OverviewComponent } from '../overview/overview.component';
import { StatsCounterComponent } from '../stats-counter/stats-counter.component';
import { OurStackComponent } from '../our-stack/our-stack.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';

import { HeadService } from '../../../services/head.service';
import { AOSService } from '../../../services/aos/aos.service';



@Component({
  selector: 'app-home',
  imports: [HeroComponent, OverviewComponent, StatsCounterComponent, OurStackComponent, TestimonialsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})

export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private headService: HeadService) {}
  private aosService = inject(AOSService);

  ngOnInit(): void {
    this.headService.preloadImages([
      '/assets/home-section/hero/thunder.svg',
      '/assets/home-section/hero/arrow.svg',
      '/assets/home-section/hero/target.svg',
      '/assets/home-section/hero/light-bulb.svg',
      '/assets/home-section/hero/forms.svg',
      '/assets/home-section/hero/rocket.svg',
      '/assets/home-section/hero/global.svg',
      '/assets/home-section/hero/cpu.svg',
    ]);

  }

  ngAfterViewInit() {
    this.aosService.initAOS({
      duration: 1000
    });

    this.aosService.refreshAOS();
  }
  
  
}