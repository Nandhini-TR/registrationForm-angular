import {Component} from '@angular/core';
import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-list',
  imports: [FormComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  studentsData:any = [  
    {
      firstname : 'Nandhini',
      lastname:'Aravinth',
      username:'Nan',
      email:'abc@gmail.com',
      tel_num:'986543210',
      password:'',
      confirm_password:'',
      id: 1
    }
  ];

  form:any = { }

  initForm(){
    this.form = {
      firstname : '',
      lastname:'',
      username:'',
      email:'',
      tel_num:'',
      password:'',
      confirm_password:'',
      id: uuidv4()
    }
  }

  constructor(){
    this.initForm()
  }

  delete(studentId:any){
    let index = this.studentsData.findIndex((obj: { id: any; }) => obj.id === studentId);
    if(index !== -1){
      this.studentsData.splice(index,1);
    }

    console.log(this.studentsData)
  }

  update(student:any){
    this.form = student
  }

  save(event:any) {

    const existingIndex = this.studentsData.findIndex((student:any) => student.id === event.id);

    if(existingIndex !== -1){
      this.studentsData[existingIndex] = {...event}
    } else{
      this.studentsData.push(event)
    }
    console.log(event);
    console.log(this.studentsData)
    
    this.initForm();

  }
}
