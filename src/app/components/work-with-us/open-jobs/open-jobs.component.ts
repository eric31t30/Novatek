import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JOBS } from '../../../data/jobs.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-open-jobs',
  imports: [RouterModule, CommonModule],
  templateUrl: './open-jobs.component.html',
  styleUrl: './open-jobs.component.css'
})
export class OpenJobsComponent {

  jobs = JOBS;

}
