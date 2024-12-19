import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors} from "@angular/forms";
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-form',
  imports: [
    CommonModule,       
    FormsModule,        
    ReactiveFormsModule 
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  @Output() itemSave = new EventEmitter<any>();

  @Input() form:any;

  submit(){
    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
      this.itemSave.emit(this.registrationForm.value);
    } else {
      console.log('Form is invalid');
    }
    
  }

  registrationForm = new FormGroup(
    {
    firstname: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
    lastname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
    username: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel_num: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
  }, { validators: this.matchPasswords }
);
matchPasswords(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirm_password')?.value;
  return password === confirmPassword ? null : { mismatch: true };
}
}
