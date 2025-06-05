import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadService } from '../../services/head.service';

@Component({
  selector: 'app-page-404',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './page-404.component.html',
  styleUrl: './page-404.component.css'
})
export class Page404Component implements OnInit {
  private headService = inject(HeadService);

  ngOnInit(): void {
    this.headService.preloadImages([
      '/assets/page-404/arrow.svg',
      '/assets/page-404/404.svg',
      '/assets/page-404/forms.svg'
    ]);
  }
}
