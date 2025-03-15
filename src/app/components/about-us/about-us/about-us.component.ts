import { Component } from '@angular/core';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'app-about-us',
  imports: [WhoWeAreComponent, HistoryComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
