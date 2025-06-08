import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})

export class TestimonialsComponent implements AfterViewInit {
  
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('prevBtn') prevBtn!: ElementRef;
  @ViewChild('nextBtn') nextBtn!: ElementRef;
  
  swiper?: Swiper;

  ngAfterViewInit(): void {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: this.nextBtn.nativeElement,
        prevEl: this.prevBtn.nativeElement,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 7000,
        disableOnInteraction: false
      }
    });
  }
}
