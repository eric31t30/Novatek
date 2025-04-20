import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HeadService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  preloadImages(imagePaths: string[]): void {
    imagePaths.forEach((path) => {
      if (!this.document.head.querySelector(`link[rel="preload"][href="${path}"]`)) {
        const link = this.document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = path;
        this.document.head.appendChild(link);
      }
    });
  }
}
