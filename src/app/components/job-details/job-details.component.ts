import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-job-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './job-details.component.html',
  styleUrls: [ '../../styles/form-styles.css', './job-details.component.css']
})
export class JobDetailsComponent {

  @ViewChild('successMessage') successMessageRef!: ElementRef<HTMLDivElement>;
  @ViewChild('invalidForm') invalidFormRef!: ElementRef<HTMLDivElement>;

  formSubmitted: boolean = false;
  success: boolean = false;
  fileName: string = '';

  formBuilder = inject(FormBuilder);

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
