import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { OverviewComponent } from '../overview/overview.component';
import { StatsCounterComponent } from '../stats-counter/stats-counter.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, OverviewComponent, StatsCounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {

}
