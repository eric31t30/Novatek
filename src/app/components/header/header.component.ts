import { Component, HostListener, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  lastScrollTop = 0;
  hideScroll = false;

  navbarActive:boolean = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      
      this.hideScroll = true;
    } else {
      
      this.hideScroll = false;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  activeNavbar(){
    
    this.navbarActive = !this.navbarActive

    if (this.navbarActive) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

}
