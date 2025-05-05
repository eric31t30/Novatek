import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-stats-counter',
  imports: [],
  templateUrl: './stats-counter.component.html',
  styleUrl: './stats-counter.component.css'
})
export class StatsCounterComponent implements AfterViewInit {

  @ViewChild('countersSection') countersSection!: ElementRef;
  
  clients = 0;
  years = 0;
  projects = 0;

  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.count('clients', 70);
        this.count('years', 12);
        this.count('projects', 50);
        this.observer.disconnect();
      }
    }, { threshold: 0.5 });

    this.observer.observe(this.countersSection.nativeElement);
  }

  count(field: 'projects' | 'years' | 'clients', final: number) {
    let value = 0;
    const interval = setInterval(() => {
      this[field]++;
      value++;
      if (value >= final) clearInterval(interval);
    }, 1500 / final);
  }
  
}
