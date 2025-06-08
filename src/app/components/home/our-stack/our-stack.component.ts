import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import { STACK } from '../../../data/stack.data';

Swiper.use([Autoplay]);


@Component({
  selector: 'app-our-stack',
  imports: [ CommonModule ],
  templateUrl: './our-stack.component.html',
  styleUrl: './our-stack.component.css'
})
export class OurStackComponent implements AfterViewInit{

  swiper?: Swiper;

  frontend = [...STACK.frontend, ...STACK.frontend, ...STACK.frontend, ...STACK.frontend];
  backend = [...STACK.backend, ...STACK.backend, ...STACK.backend, ...STACK.backend];
  database = [...STACK.database,  ...STACK.database, ...STACK.database, ...STACK.database];

  trackByIndex(index: number, _: any): number {
    return index;
  }
  ngAfterViewInit(): void {

    const sliders = document.querySelectorAll('.stack-swiper');
    sliders.forEach((el) => {
      new Swiper(el as HTMLElement, {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        freeMode: true,
        loopAdditionalSlides: 8,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: false,
        },
        speed: 5000,

      });
    });
  }
}


