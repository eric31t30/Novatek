import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { processSteps } from '../../../data/process.data';

@Component({
  selector: 'app-our-process',
  imports: [ CommonModule],
  templateUrl: './our-process.component.html',
  styleUrl: './our-process.component.css'
})
export class OurProcessComponent {


  processSteps = processSteps;
}
