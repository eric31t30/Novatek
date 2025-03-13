import { Component } from '@angular/core';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';

@Component({
  selector: 'app-about-us',
  imports: [WhoWeAreComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
