import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookies',
  imports: [CommonModule, RouterModule],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent implements OnInit {

  showCookiesBanner: boolean = false;
  hideBanner: boolean = false;
  showBanner: boolean = false;
  
  ngOnInit(): void {
    const accepted = localStorage.getItem('cookies-accepted');
    this.showCookiesBanner = !accepted;

    if (this.showCookiesBanner) {
      setTimeout(() => {
        this.showBanner = true;
      }, 5000);
    }
  }
  
  handleCookies(decision: 'accepted' | 'rejected') {
    this.hideBanner = true;
    
    setTimeout(() => {
      localStorage.setItem('cookies-accepted', decision);
      this.showCookiesBanner = false;
    }, 1000);
  }
}
