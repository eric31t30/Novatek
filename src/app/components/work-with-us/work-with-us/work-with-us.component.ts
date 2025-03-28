import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home/home.component';
import { HeroComponent } from '../hero/hero.component';
import { OpenJobsComponent } from '../open-jobs/open-jobs.component';
import { JobFormComponent } from '../job-form/job-form.component';

@Component({
  selector: 'app-work-with-us',
  imports: [HeroComponent, OpenJobsComponent, JobFormComponent],
  templateUrl: './work-with-us.component.html',
  styleUrl: './work-with-us.component.css'
})
export class WorkWithUsComponent {

}
