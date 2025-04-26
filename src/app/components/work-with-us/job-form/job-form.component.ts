import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './job-form.component.html',
  styleUrls: ['../../../styles/form-styles.css', './job-form.component.css',]
})
export class JobFormComponent {

  @ViewChild('successMessage') successMessageRef!: ElementRef<HTMLDivElement>;
  @ViewChild('invalidForm') invalidFormRef!: ElementRef<HTMLDivElement>;

  formSubmitted: boolean = false;
  success: boolean = false;
  fileName: string = '';

  private FormBuilder = inject(FormBuilder);

  jobForm: FormGroup = this.FormBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]],
    email: ['', [Validators.required, Validators.email]],
    residence: ['', [Validators.required, Validators.minLength(4)]],
    cv: [null, Validators.required],
    linkedin: ['', Validators.required],
    checkbox: [false, Validators.requiredTrue],
  });

  submit() {
    this.formSubmitted = true;

    if (this.jobForm.invalid) {
      this.jobForm.markAllAsTouched();
      this.invalidFormRef.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      return;
    }

    setTimeout(() => {
      this.successMessageRef.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 0);

    this.success = true;
  }

  hasErrors(field: string, typeError: string) {
    const control = this.jobForm.get(field);

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
