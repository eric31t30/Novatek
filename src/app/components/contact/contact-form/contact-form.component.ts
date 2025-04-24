import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact-form',
  imports: [ ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['../../../styles/form-styles.css', './contact-form.component.css',]
})
export class ContactFormComponent {

  formBuilder = inject(FormBuilder);

  contactForm: FormGroup = this.formBuilder.group({
    name:     ['', [Validators.required, Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
    phone:    ['', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]],
    company:  ['', [Validators.required, Validators.minLength(2)]],
    email:    ['', [Validators.required, Validators.email]],
    subject:  ['', Validators.required],
    message:  ['', [Validators.required, Validators.minLength(10)]],
    checkbox: [false, Validators.requiredTrue],
  })

  formSubmitted: boolean = false;
  success: boolean = false;

  submit() {
    this.formSubmitted = true;
  
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.success = true
   
    console.log('Formulario completado');
  }
  
  hasErrors(field: string, typeError: string) {
    const control = this.contactForm.get(field);
    
    if (field === 'checkbox' && typeError === 'requiredTrue') {
      return control?.hasError('required') && this.formSubmitted;
    }
    return control?.hasError(typeError) && this.formSubmitted;
  }
  

}
