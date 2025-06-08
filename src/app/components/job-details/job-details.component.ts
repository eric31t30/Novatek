import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, RouterModule } from '@angular/router';

import { HeadService } from '../../services/head.service';
import { JOBS } from '../../data/jobs.data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './job-details.component.html',
  styleUrls: [ '../../styles/form-styles.css', './job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  @ViewChild('successMessage') successMessageRef!: ElementRef<HTMLDivElement>;
  @ViewChild('invalidForm') invalidFormRef!: ElementRef<HTMLDivElement>;

  formSubmitted: boolean = false;
  success: boolean = false;
  fileName: string = '';
  job: any;

  formBuilder = inject(FormBuilder);
  headService = inject(HeadService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    this.headService.preloadImages([
      '/assets/job-details/back.svg',
      '/assets/job-details/point.svg',
      '/assets/job-details/deco-1.svg',
      '/assets/job-details/deco-2.svg',
    ]);

    const slug = this.route.snapshot.paramMap.get('slug');
    this.job = JOBS.find(j => j.slug === slug);
    if (!this.job) {
      this.router.navigate(['/404']);
    }
    
  }

  offerForm: FormGroup = this.formBuilder.group({
    name:     ['', [Validators.required, Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
    phone:    ['', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]],
    email:    ['', [Validators.required, Validators.email]],
    cv:       [null, Validators.required],
    checkbox: [false, Validators.requiredTrue],
  })

  submit() {
    this.formSubmitted = true;
  
    if (this.offerForm.invalid) {
      this.offerForm.markAllAsTouched();
      this.invalidFormRef.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      return;
    }

    this.success = true
    setTimeout(() => {
      this.successMessageRef.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 0);

  }
  
  hasErrors(field: string, typeError: string) {
    const control = this.offerForm.get(field);
    
    if (field === 'checkbox' && typeError === 'requiredTrue') {
      return control?.hasError('required') && this.formSubmitted;
    }
    return control?.hasError(typeError) && this.formSubmitted;
  }

  fileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    } else {
      this.fileName = '';
    }
  }
}
