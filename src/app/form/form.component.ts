import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: false
})
export class FormComponent {

  id = ''

  constructor(private route:ActivatedRoute, private router: Router){
    if(this.route.snapshot.paramMap.getAll('data').length){
      const data = JSON.parse(this.route.snapshot.paramMap.getAll('data')[0]);
      this.registrationForm.patchValue(data);
      this.id = data.id;
      console.log(this.id)
      console.log(this.registrationForm.value)
    }
  }

  @Output() itemSave = new EventEmitter<any>();


  submit(){
    if (this.registrationForm.valid) {

      const formData ={
        ...this.registrationForm.value,
        id: this.id || uuidv4()
      }

      const existingData = JSON.parse(localStorage.getItem('studentsData') || '[]')

      if (this.id){
        const index = existingData.findIndex((student:any)=>student.id === this.id);
        if(index !== -1){
          existingData[index] = formData
        }
      } else{
        existingData.push(formData)
      }

      localStorage.setItem("studentsData", JSON.stringify(existingData));
      this.router.navigate(['/list'])
      
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
