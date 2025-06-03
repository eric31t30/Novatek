import { Component } from '@angular/core';

import { SERVICES } from '../../../data/services.data';

@Component({
  selector: 'app-service-list',
  imports: [],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent {

  services = SERVICES;

}
