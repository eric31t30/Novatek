import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from '../../../data/services.data';

@Component({
  selector: 'app-service-list',
  imports: [CommonModule],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent {

  services = SERVICES;

}
