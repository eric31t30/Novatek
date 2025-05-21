import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ServiceListComponent } from '../service-list/service-list.component';
import { ClientsComponent } from '../clients/clients.component';
import { ProjectContactComponent } from '../project-contact/project-contact.component';

import { HeadService } from '../../../services/head.service';
import { AOSService } from '../../../services/aos/aos.service';
import { HeroComponent } from '../../services/hero/hero.component';


@Component({
  selector: 'app-services',
  imports: [ HeroComponent ,ServiceListComponent, ClientsComponent, ProjectContactComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit, AfterViewInit{
  
  constructor(private headService: HeadService) {}
  
  ngOnInit(): void {
    this.headService.preloadImages([
      '/assets/services-page/hero/img-1.jpg',
      '/assets/services-page/hero/img-2.jpg',
      '/assets/services-page/hero/img-3.jpg',
      '/assets/services-page/hero/Circle.svg',
      '/assets/services-page/hero/Ribbon.svg',
      '/assets/services-page/hero/deco-1.svg',
      'assets/services-page/service-list/web.svg',
      '/assets/services-page/service-list/services-deco-2.svg'
    ]);
  }

  private aosServices = inject(AOSService);

  ngAfterViewInit(): void {
    this.aosServices.initAOS({
      offset: 220,
    });

    this.aosServices.refreshAOS();
  }
}
