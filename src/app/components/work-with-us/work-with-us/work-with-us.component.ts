import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { HomeComponent } from '../../home/home/home.component';
import { HeroComponent } from '../hero/hero.component';
import { OpenJobsComponent } from '../open-jobs/open-jobs.component';
import { JobFormComponent } from '../job-form/job-form.component';
import { BenefitsComponent } from "../benefits/benefits.component";
import { CultureComponent } from '../culture/culture.component';

import { HeadService } from '../../../services/head.service';
import { AOSService } from '../../../services/aos/aos.service';

@Component({
  selector: 'app-work-with-us',
  standalone: true,
  imports: [HeroComponent, OpenJobsComponent, JobFormComponent, BenefitsComponent, CultureComponent],
  templateUrl: './work-with-us.component.html',
  styleUrl: './work-with-us.component.css'
})
export class WorkWithUsComponent implements OnInit, AfterViewInit{

  constructor(private headService: HeadService) {}
  private aosService = inject(AOSService)
    
  ngOnInit(): void {
    this.headService.preloadImages([
      '/assets/work-with-us-page/hero/background-hero.svg',
      '/assets/work-with-us-page/hero/hand.svg',
      '/assets/work-with-us-page/hero/suitcase.svg',
      '/assets/work-with-us-page/hero/computer.svg',
      '/assets/work-with-us-page/open-jobs/arrow.svg'
    ]);
  }

  ngAfterViewInit(): void {
    this.aosService.initAOS({
      offset: 250,
    });
    this.aosService.refreshAOS();
  }
}
