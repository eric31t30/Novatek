import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JOBS } from '../../../data/jobs.data';


@Component({
  selector: 'app-open-jobs',
  imports: [RouterModule],
  templateUrl: './open-jobs.component.html',
  styleUrl: './open-jobs.component.css'
})
export class OpenJobsComponent implements OnInit {

  jobs = JOBS;

  ngOnInit(): void {
    
  }
}
