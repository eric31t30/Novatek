import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() icon: string = "";
  @Input() title: string = "";
  @Input() titleColor: string = "";
  @Input() description: string = "";
}
