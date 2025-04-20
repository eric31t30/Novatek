import { Component, OnInit } from '@angular/core';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { HistoryComponent } from '../history/history.component';
import { MissionVisionComponent } from '../mission-vision/mission-vision.component';
import { OurTeamComponent } from '../our-team/our-team.component';
import { JoinUsComponent } from '../join-us/join-us.component';

import { HeadService } from '../../../services/head.service';


@Component({
  selector: 'app-about-us',
  imports: [WhoWeAreComponent, HistoryComponent, MissionVisionComponent, OurTeamComponent, JoinUsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit{

  constructor(private headService: HeadService) {}

  ngOnInit(): void {
    this.headService.preloadImages([
      '/assets/about-us-page/who-we-are/deco-1.svg',
      '/assets/about-us-page/who-we-are/world.svg',
    ]);
  }
}
