import { Component } from '@angular/core';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { HistoryComponent } from '../history/history.component';
import { MissionVisionComponent } from '../mission-vision/mission-vision.component';
import { OurTeamComponent } from '../our-team/our-team.component';
import { JoinUsComponent } from '../join-us/join-us.component';


@Component({
  selector: 'app-about-us',
  imports: [WhoWeAreComponent, HistoryComponent, MissionVisionComponent, OurTeamComponent, JoinUsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
