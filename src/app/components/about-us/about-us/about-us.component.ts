import { Component, inject, OnInit } from '@angular/core';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { HistoryComponent } from '../history/history.component';
import { MissionVisionComponent } from '../mission-vision/mission-vision.component';
import { OurTeamComponent } from '../our-team/our-team.component';
import { JoinUsComponent } from '../join-us/join-us.component';

import { HeadService } from '../../../services/head.service';
import { AOSService } from '../../../services/aos/aos.service';
import { OurValuesComponent } from '../our-values/our-values.component';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [WhoWeAreComponent, OurValuesComponent, HistoryComponent, MissionVisionComponent, OurTeamComponent, JoinUsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit{

  constructor(private headService: HeadService) {}
  private aosService = inject(AOSService);

  ngOnInit(): void {
    this.headService.preloadImages([
      '/assets/about-us-page/who-we-are/deco-1.svg',
      '/assets/about-us-page/who-we-are/world.svg',
      '/assets/about-us-page/who-we-are/img-1.jpg',
      '/assets/about-us-page/who-we-are/img-2.jpg',
      '/assets/about-us-page/who-we-are/img-3.jpg',
    ]);
  }

  ngAfterViewInit() {
    this.aosService.initAOS({
      offset: 700,
      duration: 1000
    });

    this.aosService.refreshAOS();
  }
}
