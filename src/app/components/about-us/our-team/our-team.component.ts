import { Component } from '@angular/core';
import { TeamCardComponent } from '../team-card/team-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-team',
  imports: [TeamCardComponent, CommonModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {

}
