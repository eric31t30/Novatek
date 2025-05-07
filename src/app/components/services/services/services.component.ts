import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ServiceListComponent } from '../service-list/service-list.component';
import { ClientsComponent } from '../clients/clients.component';
import { ProjectContactComponent } from '../project-contact/project-contact.component';

import { HeadService } from '../../../services/head.service';
import { AOSService } from '../../../services/aos/aos.service';


@Component({
  selector: 'app-services',
  imports: [ ServiceListComponent, ClientsComponent, ProjectContactComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit, AfterViewInit{
  
  constructor(private headService: HeadService) {}
  
  ngOnInit(): void {
    this.headService.preloadImages([
      '/assets/services-page/service-list/background-2.svg',
      '/assets/services-page/service-list/arrow.svg',
      'assets/services-page/service-list/software.svg',
      '/assets/services-page/service-list/services-deco-1.svg',
      'assets/services-page/service-list/web.svg',
      '/assets/services-page/service-list/services-deco-2.svg',
    ]);
  }

  private aosServices = inject(AOSService);

  ngAfterViewInit(): void {
    this.aosServices.initAOS({
      offset: 120,
    });

    this.aosServices.refreshAOS();
  }
}
