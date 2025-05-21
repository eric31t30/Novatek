import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'swiper/css/bundle';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';

Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

@Component({
  selector: 'app-our-stack',
  imports: [CommonModule],
  templateUrl: './our-stack.component.html',
  styleUrl: './our-stack.component.css'
})
export class OurStackComponent implements AfterViewInit{

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  swiper?: Swiper;
  
  ngAfterViewInit(): void {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false
      }
    });
  }

}
