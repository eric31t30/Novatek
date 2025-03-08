import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { register } from 'swiper/element/bundle';


register();
@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TestimonialsComponent {
  
}
