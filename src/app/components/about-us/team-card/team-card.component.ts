import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  imports: [],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css'
})
export class TeamCardComponent {
  @Input() teamImg: string = "";
  @Input() name: string = "";
  @Input() position: string = ""; 
}
