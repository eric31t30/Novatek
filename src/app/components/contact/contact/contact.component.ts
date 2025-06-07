import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';

import { HeadService } from '../../../services/head.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  
  constructor(private headService: HeadService) {}
  
  ngOnInit(): void {
    this.headService.preloadImages([
      '/assets/contact-page/circle.svg',
      '/assets/contact-page/background-deco.svg',
      '/assets/contact-page/world.svg',
      '/assets/contact-page/clock.svg',
      '/assets/contact-page/email.svg',
      '/assets/contact-page/phone.svg',
      "/assets/contact-page/colombia.svg",
      "/assets/contact-page/chile.svg",
      "/assets/contact-page/spain.svg",
      "/assets/contact-page/mexico.svg",
      "/assets/contact-page/argentina.svg",
      "/assets/contact-page/eeuu.svg",
    ]);
  }
}
