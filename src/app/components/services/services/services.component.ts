import { Component } from '@angular/core';
import { ServiceListComponent } from '../service-list/service-list.component';

@Component({
  selector: 'app-services',
  imports: [ServiceListComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
