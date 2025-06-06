import { Injectable } from '@angular/core';
import AOS from 'aos';

@Injectable({
  providedIn: 'root'
})
export class AOSService {

  private defaultOptions = {
    duration: 1000, 
    once: true,
    offset: 400,
  };

  initAOS(options = {}) {
    AOS.init({ ...this.defaultOptions, ...options });
  }

  refreshAOS() {
    AOS.refresh();
  }

}